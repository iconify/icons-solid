import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qiqomoa-e.css';
import '../../css/c/cw5pk9buu.css';
import '../../css/a/am4yric8b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="qiqomoa-e"/><path class="cw5pk9buu"/><path class="am4yric8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cmake"} {...others} />);
}

export default Component;
