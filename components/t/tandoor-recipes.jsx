import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ys47xybbc.css';
import '../../css/r/r32otac5i.css';
import '../../css/w/w3t__6b8m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ys47xybbc"/><path class="r32otac5i"/><path class="w3t__6b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:tandoor-recipes"} {...others} />);
}

export default Component;
