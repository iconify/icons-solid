import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_09uzbol.css';
import '../../css/r/reipi0w6l.css';
import '../../css/b/b1_nvdb6d.css';
import '../../css/q/qtvivvozr.css';
import '../../css/s/suavi9osi.css';
import '../../css/o/o69beaclm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k_09uzbol"/><path class="reipi0w6l"/><path class="b1_nvdb6d"/><g class="qtvivvozr"><path class="suavi9osi"/><path class="o69beaclm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leftwards-pushing-hand-dark-skin-tone"} {...others} />);
}

export default Component;
