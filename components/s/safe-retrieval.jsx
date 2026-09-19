import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qr_nd0b_z.css';
import '../../css/g/g3d0wwbtf.css';
import '../../css/q/q8ugq6w2c.css';
import '../../css/i/irl1o9bvn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="qr_nd0b_z"/><path class="g3d0wwbtf"/><path class="q8ugq6w2c"/><path class="irl1o9bvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:safe-retrieval"} {...others} />);
}

export default Component;
