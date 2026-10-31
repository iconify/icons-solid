import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/arf2kebby.css';
import '../../css/e/e5w_7m3ak.css';
import '../../css/q/qhijn1h0f.css';
import '../../css/z/z1yjszcuj.css';
import '../../css/f/fj_4bhbtf.css';
import '../../css/y/ym5ro0bdx.css';
import '../../css/q/qdm-mgb1o.css';
import '../../css/j/jfi9ypv5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="arf2kebby"/><path class="e5w_7m3ak"/><path class="qhijn1h0f"/><path class="wm-k z1yjszcuj"/><path class="fj_4bhbtf wm-a"/><path class="ym5ro0bdx"/><path class="qdm-mgb1o"/><path class="jfi9ypv5g wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:school"} {...others} />);
}

export default Component;
