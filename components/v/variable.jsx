import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u05nnmyjz.css';
import '../../css/e/eo9cc0byw.css';
import '../../css/l/lyl06idcp.css';
import '../../css/l/l8_ho4bpi.css';
import '../../css/a/ak8s00b1b.css';
import '../../css/b/bjzxinbqv.css';
import '../../css/p/pba4c2bgw.css';
import '../../css/k/kond9wbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u05nnmyjz wm-shadow"/><path class="eo9cc0byw wm-k"/><path class="lyl06idcp wm-k"/><path class="l8_ho4bpi wm-k"/><path class="ak8s00b1b wm-k"/><path class="bjzxinbqv wm-shine"/><path class="pba4c2bgw wm-a"/><path class="kond9wbvr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:variable"} {...others} />);
}

export default Component;
