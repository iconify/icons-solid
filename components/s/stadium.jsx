import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxvslsb9s.css';
import '../../css/i/i_walxiea.css';
import '../../css/j/jjvjtmj3d.css';
import '../../css/f/fgcyq-b7r.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fjt55e0uz.css';
import '../../css/o/ol5kdxbzl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pxvslsb9s"/><path class="i_walxiea"/><path class="jjvjtmj3d"/><path class="fgcyq-b7r"/><g class="ij2x_72vy"><path class="fjt55e0uz"/><path class="ol5kdxbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stadium"} {...others} />);
}

export default Component;
