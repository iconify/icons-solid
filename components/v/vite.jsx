import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mz47f051w.css';
import '../../css/s/s6-g32e5v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="mz47f051w"/><path class="s6-g32e5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:vite"} {...others} />);
}

export default Component;
