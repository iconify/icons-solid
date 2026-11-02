import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8-cp0bpm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8-cp0bpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:indent-increase-fill"} {...others} />);
}

export default Component;
