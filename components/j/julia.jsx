import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w_6x2gb8n.css';
import '../../css/l/laf36ebwr.css';
import '../../css/j/jo097xb2e.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="w_6x2gb8n"/><path class="laf36ebwr"/><path class="jo097xb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:julia"} {...others} />);
}

export default Component;
