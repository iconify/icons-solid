import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j7h-vbcez.css';
import '../../css/v/vmbun3c0k.css';
import '../../css/c/clp1aac9s.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="j7h-vbcez"/><path class="vmbun3c0k"/><path class="clp1aac9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:javascript-config"} {...others} />);
}

export default Component;
