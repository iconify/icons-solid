import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxmlu-1iw.css';
import '../../css/s/sorh4u6lg.css';
import '../../css/u/ur_s2ef1f.css';
import '../../css/d/d3j_ttbyd.css';
import '../../css/h/h_o3v6gtx.css';
import '../../css/d/dhyinob3m.css';
import '../../css/l/lx5wrrm7l.css';
import '../../css/y/yjlwnuqxc.css';
import '../../css/e/e7csh9bbs.css';
import '../../css/y/yhtqaib1h.css';
import '../../css/s/srwgyhdvr.css';
import '../../css/z/zqddipb_n.css';
import '../../css/x/x9tvxvbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxmlu-1iw wm-shadow"/><path class="sorh4u6lg"/><path class="ur_s2ef1f"/><path class="d3j_ttbyd"/><path class="h_o3v6gtx"/><path class="dhyinob3m wm-shine"/><path class="lx5wrrm7l"/><path class="yjlwnuqxc"/><path class="e7csh9bbs"/><path class="yhtqaib1h"/><path class="srwgyhdvr"/><path class="wm-shine zqddipb_n"/><path class="x9tvxvbnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:braces"} {...others} />);
}

export default Component;
