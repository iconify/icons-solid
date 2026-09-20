import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2ggfttmv.css';
import '../../css/z/zukz2lwdc.css';
import '../../css/a/a90z8lbwq.css';
import '../../css/n/ntrw_gbcd.css';
import '../../css/k/k5qfb7x2g.css';
import '../../css/s/slt1wizha.css';
import '../../css/m/mlk6yqbul.css';
import '../../css/y/y5l3d_b_v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d2ggfttmv"/><path class="zukz2lwdc"/><path class="a90z8lbwq"/><path class="ntrw_gbcd"/><path class="k5qfb7x2g"/><path class="slt1wizha"/><path class="mlk6yqbul"/><path class="y5l3d_b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:tomato"} {...others} />);
}

export default Component;
