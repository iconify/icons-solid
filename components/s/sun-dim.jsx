import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/n0unncbeq.css';
import '../../css/t/t1sgs_wre.css';
import '../../css/b/bk04fhbuy.css';
import '../../css/q/q42xo2b2p.css';
import '../../css/n/n87jf9byf.css';
import '../../css/x/x8o3n4w5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="n0unncbeq"/><path class="t1sgs_wre wm-shine"/><path class="bk04fhbuy wm-k"/><path class="q42xo2b2p wm-a"/><path class="n87jf9byf"/><path class="x8o3n4w5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sun-dim"} {...others} />);
}

export default Component;
