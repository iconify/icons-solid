import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5vtxobjr.css';
import '../../css/y/ycummybdd.css';
import '../../css/k/k6-b_obwq.css';
import '../../css/v/vx42e2f3d.css';
import '../../css/b/bf19-2bti.css';
import '../../css/c/cpvkljb2k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d5vtxobjr"/><path class="ycummybdd"/><path class="k6-b_obwq"/><path class="vx42e2f3d"/><path class="bf19-2bti"/><path class="cpvkljb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rainbow"} {...others} />);
}

export default Component;
