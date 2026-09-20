import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlo3x6s-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wlo3x6s-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hexagon-line"} {...others} />);
}

export default Component;
