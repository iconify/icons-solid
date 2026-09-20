import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na23c-lwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="na23c-lwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hemisphere-fill"} {...others} />);
}

export default Component;
