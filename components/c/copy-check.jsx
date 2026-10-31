import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fqxoujbzn.css';
import '../../css/x/xfa_2oc5h.css';
import '../../css/w/wy66eub1y.css';
import '../../css/c/c5b0y0tyz.css';
import '../../css/b/b5x9xi0bu.css';
import '../../css/p/pryf5cb1j.css';
import '../../css/i/ihv4tpkxi.css';
import '../../css/a/ank8l2n_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fqxoujbzn"/><path class="xfa_2oc5h"/><path class="wm-shine wy66eub1y"/><path class="c5b0y0tyz wm-k"/><path class="b5x9xi0bu wm-a"/><path class="pryf5cb1j wm-s"/><path class="ihv4tpkxi"/><path class="ank8l2n_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:copy-check"} {...others} />);
}

export default Component;
