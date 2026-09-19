import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xr3e66x2f.css';
import '../../css/z/zq-gy68ty.css';
import '../../css/f/foyq5ccgd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xr3e66x2f"/><path class="zq-gy68ty"/><ellipse transform="rotate(30 23.477 12.592)" class="foyq5ccgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pink-heart"} {...others} />);
}

export default Component;
