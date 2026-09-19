import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/b/byegiobnz.css';
import '../../css/c/cmwc8ogja.css';
import '../../css/y/yuss_xq2v.css';
import '../../css/s/swttmrb1d.css';
import '../../css/l/ls48jt5ky.css';
import '../../css/d/dbc5e2b8f.css';
import '../../css/q/qycompbhp.css';
import '../../css/b/bk_-x0bdo.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="byegiobnz"/><path class="cmwc8ogja"/><circle class="yuss_xq2v"/><path class="swttmrb1d"/><path class="ls48jt5ky"/><path class="dbc5e2b8f"/><path class="qycompbhp"/><path class="bk_-x0bdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:clock"} {...others} />);
}

export default Component;
