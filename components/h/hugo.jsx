import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vf1cscb_g.css';
import '../../css/n/njyfnbcig.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="vf1cscb_g"/><path class="njyfnbcig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:hugo"} {...others} />);
}

export default Component;
