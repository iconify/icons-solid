import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqchw4btd.css';
import '../../css/n/n-_q50uul.css';
import '../../css/c/c5k-29ekc.css';
import '../../css/s/sw6ucfvzz.css';
import '../../css/q/qr3e8bben.css';
import '../../css/m/m3v6hfb1d.css';
import '../../css/f/fxkiyvbxd.css';
import '../../css/u/urjqw-26x.css';
import '../../css/r/rei7dnb1m.css';
import '../../css/h/hgzww4bao.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qqchw4btd"/><path class="n-_q50uul"/><path class="c5k-29ekc"/><path class="sw6ucfvzz"/><path class="qr3e8bben"/><path class="m3v6hfb1d"/><path class="fxkiyvbxd"/><ellipse class="urjqw-26x"/><path class="rei7dnb1m"/><path class="hgzww4bao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:redis"} {...others} />);
}

export default Component;
