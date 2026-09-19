import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sif-44brx.css';
import '../../css/c/csnl12zgv.css';
import '../../css/b/b_lz6vbnj.css';
import '../../css/u/ul8r6kblf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="sif-44brx"/><path class="csnl12zgv"/><path class="b_lz6vbnj"/><path class="ul8r6kblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fingerprint-two"} {...others} />);
}

export default Component;
