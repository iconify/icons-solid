import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eci9ug11m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eci9ug11m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hight-beam-headlights-line"} {...others} />);
}

export default Component;
