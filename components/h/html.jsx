import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/leekh_blv.css';
import '../../css/c/cj1ltjbyi.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="leekh_blv"/><path class="cj1ltjbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:html"} {...others} />);
}

export default Component;
