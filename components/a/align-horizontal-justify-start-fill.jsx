import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4n0arbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q4n0arbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:align-horizontal-justify-start-fill"} {...others} />);
}

export default Component;
