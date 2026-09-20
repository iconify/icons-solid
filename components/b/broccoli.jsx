import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d397wrbdw.css';
import '../../css/o/o_vkwibvc.css';
import '../../css/h/h66lnp1ue.css';
import '../../css/c/ctthb-ybi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d397wrbdw"/><path class="o_vkwibvc"/><path class="h66lnp1ue"/><path class="ctthb-ybi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:broccoli"} {...others} />);
}

export default Component;
