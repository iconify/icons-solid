import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r5m2bbppl.css';
import '../../css/u/u1270i3fx.css';
import '../../css/t/tmwyu4bav.css';
import '../../css/z/zmd3boisj.css';
import '../../css/v/vl1p2wb1q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="r5m2bbppl"/><path class="u1270i3fx"/><path class="tmwyu4bav"/><path class="zmd3boisj"/><path class="vl1p2wb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:marko"} {...others} />);
}

export default Component;
