import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wrewpfm7g.css';
import '../../css/k/kbhnc06ui.css';
import '../../css/h/hzrr-0ilm.css';
import '../../css/c/c31g3-byf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="wrewpfm7g"/><path class="kbhnc06ui"/><path class="hzrr-0ilm"/><path class="c31g3-byf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:css-map"} {...others} />);
}

export default Component;
