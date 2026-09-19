import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jauqbt3dv.css';
import '../../css/c/cd5xrx4je.css';
import '../../css/u/usa_sknbl.css';
import '../../css/j/j5tpb0ucx.css';
import '../../css/q/qgrzvzd7n.css';
import '../../css/v/vqfmdnlkv.css';
import '../../css/p/pwc4jib9g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jauqbt3dv"/><path class="cd5xrx4je"/><path class="usa_sknbl"/><path class="j5tpb0ucx"/><path class="qgrzvzd7n"/><path class="vqfmdnlkv"/><path class="pwc4jib9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:delivery-truck"} {...others} />);
}

export default Component;
