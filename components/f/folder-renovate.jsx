import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vj-in0b-p.css';
import '../../css/c/coe0fwbkg.css';
import '../../css/s/slyhgd-ej.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="vj-in0b-p"/><path class="coe0fwbkg"/><path class="slyhgd-ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-renovate"} {...others} />);
}

export default Component;
