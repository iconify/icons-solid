import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/deifvsb6z.css';
import '../../css/z/z1sgf4tcb.css';

const viewBox = {"width":367.64,"height":360.14,"left":-3.82,"top":-0.07};
const content = `<path class="deifvsb6z"/><path class="z1sgf4tcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kubeedge-dark"} {...others} />);
}

export default Component;
