import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s_qnxq2qs.css';
import '../../css/h/hl9kmhwaw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="s_qnxq2qs"/><path class="hl9kmhwaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:git"} {...others} />);
}

export default Component;
