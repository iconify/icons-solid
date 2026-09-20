import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k13nuzrqr.css';
import '../../css/y/yxlj6vurs.css';
import '../../css/y/y06lpjbxo.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kzvf59kzj.css';
import '../../css/k/kkgh1qb4r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k13nuzrqr"/><path class="yxlj6vurs"/><path class="y06lpjbxo"/><g class="ij2x_72vy"><path class="kzvf59kzj"/><path class="kkgh1qb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wireframes"} {...others} />);
}

export default Component;
