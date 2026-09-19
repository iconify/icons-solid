import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gg61o3b0u.css';
import '../../css/o/onghtjj2z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="gg61o3b0u"/><path class="onghtjj2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:jupyter"} {...others} />);
}

export default Component;
