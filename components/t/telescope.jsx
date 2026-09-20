import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn8m7vbib.css';
import '../../css/o/o9_qvlbwy.css';
import '../../css/c/cwmeeibwc.css';
import '../../css/c/c1mz_9byp.css';
import '../../css/p/pv9xaozvi.css';
import '../../css/p/pinmuxbnx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rn8m7vbib"/><path class="o9_qvlbwy"/><path class="cwmeeibwc"/><path class="c1mz_9byp"/><circle class="pv9xaozvi"/><path class="pinmuxbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:telescope"} {...others} />);
}

export default Component;
