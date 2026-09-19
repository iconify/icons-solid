import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/emcw7sa2k.css';
import '../../css/q/q2k45vxkm.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="emcw7sa2k"/><path class="q2k45vxkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:renovate"} {...others} />);
}

export default Component;
