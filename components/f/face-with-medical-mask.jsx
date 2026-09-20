import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6iikjgcv.css';
import '../../css/m/ms3y28bqn.css';
import '../../css/f/fg8_y-bfr.css';
import '../../css/z/zak-2ac5i.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fqy6ynffm.css';
import '../../css/h/h35bbl50d.css';
import '../../css/d/d3i1wo8gg.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="s6iikjgcv"/><path class="ms3y28bqn"/><path class="fg8_y-bfr"/><path class="zak-2ac5i"/><g class="ij2x_72vy"><path class="fqy6ynffm"/><path class="h35bbl50d"/><path class="d3i1wo8gg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-medical-mask"} {...others} />);
}

export default Component;
