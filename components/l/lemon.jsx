import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh13sy9vx.css';
import '../../css/s/syb-hnbut.css';
import '../../css/u/uy64r1b_a.css';
import '../../css/n/niveh5x3p.css';
import '../../css/u/u23650bwx.css';
import '../../css/d/dcqdxh5zc.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVG5tHQTdEg" class="vh13sy9vx"/></defs><path class="syb-hnbut"/><path class="uy64r1b_a"/><path class="niveh5x3p"/><path class="u23650bwx"/><g class="dcqdxh5zc"><use href="#SVG5tHQTdEg"/><use href="#SVG5tHQTdEg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lemon"} {...others} />);
}

export default Component;
