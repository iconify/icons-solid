import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1h5uowvl.css';
import '../../css/c/cvdwpjbjs.css';
import '../../css/v/vq17qubzq.css';
import '../../css/i/itgzufbsq.css';
import '../../css/t/trnn87dol.css';
import '../../css/s/sujc44oww.css';
import '../../css/z/zrxk00bgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u1h5uowvl wm-k"/><path class="cvdwpjbjs wm-k"/><path class="vq17qubzq wm-k"/><path class="itgzufbsq wm-a"/><path class="trnn87dol wm-a"/><path class="sujc44oww wm-a"/><path class="wm-shine zrxk00bgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:keyboard"} {...others} />);
}

export default Component;
