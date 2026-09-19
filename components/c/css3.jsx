import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/t1ck5doud.css';
import '../../css/v/vopsp_5kw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="t1ck5doud"/><path class="vopsp_5kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:css3"} {...others} />);
}

export default Component;
