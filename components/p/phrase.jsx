import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qwc_s0btg.css';
import '../../css/q/qvlrhybtq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="qwc_s0btg"/><path class="qvlrhybtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:phrase"} {...others} />);
}

export default Component;
