import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8v7zs.css';
import '../../css/x/xy0gvz.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8v7zs"/><path class="xy0gvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:paint-drop-half-twotone"} {...others} />);
}

export default Component;
