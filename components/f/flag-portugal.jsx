import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/r/rmslx6b5x.css';
import '../../css/m/m7eg-8dwb.css';
import '../../css/x/xfg-rzdjz.css';
import '../../css/c/cze3qkbeq.css';
import '../../css/j/jvwy3snnx.css';
import '../../css/k/k3kmdbbrn.css';
import '../../css/w/wh13vq8uz.css';
import '../../css/t/t__sc6b0j.css';
import '../../css/j/j025w3bnq.css';
import '../../css/o/oqh5it54e.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="rmslx6b5x"/><circle class="m7eg-8dwb"/><path class="xfg-rzdjz"/><path class="cze3qkbeq"/><path class="jvwy3snnx"/><circle class="k3kmdbbrn"/><circle class="wh13vq8uz"/><circle class="t__sc6b0j"/><circle class="j025w3bnq"/><circle class="oqh5it54e"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-portugal"} {...others} />);
}

export default Component;
