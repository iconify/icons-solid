import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/t77y8m80t.css';
import '../../css/i/ize1_abdx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="t77y8m80t"/><path class="ize1_abdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:vital"} {...others} />);
}

export default Component;
