import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_3apbb9f.css';
import '../../css/c/cdbe9ac0s.css';
import '../../css/t/trr-_mkon.css';
import '../../css/i/iujjribmd.css';
import '../../css/u/uy0-fdgsh.css';
import '../../css/w/w9-l4pzix.css';
import '../../css/y/ya6370b_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e_3apbb9f"/><circle class="cdbe9ac0s"/><circle class="trr-_mkon"/><circle class="iujjribmd"/><circle class="uy0-fdgsh"/><circle class="w9-l4pzix"/><circle class="ya6370b_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:graph-star"} {...others} />);
}

export default Component;
