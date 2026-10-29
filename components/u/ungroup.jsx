import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-767-bmw.css';
import '../../css/j/j3mxortda.css';
import '../../css/a/a7-6-bcjh.css';
import '../../css/u/uuj52eorv.css';
import '../../css/a/ayfeafgco.css';
import '../../css/b/b51j1p-1m.css';
import '../../css/m/mizt6op1t.css';
import '../../css/x/xldn9wboe.css';
import '../../css/w/wnxqkxbwq.css';
import '../../css/f/fg1h9dbki.css';
import '../../css/h/hv01sk35q.css';
import '../../css/r/rpu-7ibsa.css';
import '../../css/a/aovtpobnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-767-bmw wm-shadow"/><path class="j3mxortda wm-k"/><path class="a7-6-bcjh wm-k"/><path class="uuj52eorv wm-k"/><path class="ayfeafgco wm-k"/><path class="b51j1p-1m wm-k"/><path class="mizt6op1t wm-shine"/><path class="wm-a xldn9wboe"/><path class="wm-a wnxqkxbwq"/><path class="fg1h9dbki wm-a"/><path class="hv01sk35q wm-a"/><path class="rpu-7ibsa wm-a"/><path class="aovtpobnd wm-deco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:ungroup"} {...others} />);
}

export default Component;
