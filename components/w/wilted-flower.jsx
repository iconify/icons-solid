import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z779csbnq.css';
import '../../css/g/g1px0qbve.css';
import '../../css/m/m600h7b1v.css';
import '../../css/c/cq4zwabmf.css';
import '../../css/r/r1ae6tb2t.css';
import '../../css/t/tqk2xpkhe.css';
import '../../css/o/o-t2v7fze.css';
import '../../css/h/h_lzho2de.css';
import '../../css/d/ddn6g30nl.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/iv_l_e0hc.css';
import '../../css/f/f73x90b-k.css';
import '../../css/s/spio56k_l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z779csbnq"/><path class="g1px0qbve"/><path class="m600h7b1v"/><path class="cq4zwabmf"/><path class="r1ae6tb2t"/><path class="tqk2xpkhe"/><path class="o-t2v7fze"/><path class="h_lzho2de"/><path class="ddn6g30nl"/><g class="jn8qy4bru"><path class="iv_l_e0hc"/><path class="f73x90b-k"/><path class="spio56k_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wilted-flower"} {...others} />);
}

export default Component;
