import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf1p5q8zl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xf1p5q8zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:fire-dash"} {...others} />);
}

export default Component;
