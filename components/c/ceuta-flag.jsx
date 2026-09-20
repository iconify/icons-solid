import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/i/if56bndaq.css';
import '../../css/k/k27d-4bvr.css';
import '../../css/m/mp087w6ar.css';
import '../../css/k/khclm9edj.css';
import '../../css/a/ahd9sxbqh.css';
import '../../css/f/fqlr-db4n.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="if56bndaq"/><path class="k27d-4bvr"/><path class="mp087w6ar"/><path class="khclm9edj"/><path class="ahd9sxbqh"/><path class="fqlr-db4n"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ceuta-flag"} {...others} />);
}

export default Component;
