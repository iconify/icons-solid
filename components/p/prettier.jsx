import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yiv0fjb-a.css';
import '../../css/z/zipz652ap.css';
import '../../css/l/lf2zr440w.css';
import '../../css/o/ox2xrtbxs.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="yiv0fjb-a"/><path class="zipz652ap"/><path class="lf2zr440w"/><path class="ox2xrtbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:prettier"} {...others} />);
}

export default Component;
