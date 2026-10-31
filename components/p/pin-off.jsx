import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/revwjsb_e.css';
import '../../css/o/o_mndg_tz.css';
import '../../css/x/x97f9bb-q.css';
import '../../css/q/q-qnch_8l.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/n/n2yonroyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="revwjsb_e"/><path class="o_mndg_tz wm-shine"/><path class="wm-k x97f9bb-q"/><path class="q-qnch_8l wm-a"/><path class="qr4ochb5c wm-s"/><path class="n2yonroyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pin-off"} {...others} />);
}

export default Component;
