import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x4ih0qmms.css';
import '../../css/e/eo918_bwg.css';
import '../../css/l/l5b77jb3k.css';
import '../../css/s/sntbgpvdb.css';
import '../../css/w/wegbbbcvt.css';
import '../../css/x/xt92fd6te.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="x4ih0qmms"/><path class="eo918_bwg wm-shine"/><path class="l5b77jb3k wm-k"/><path class="sntbgpvdb wm-a"/><path class="wegbbbcvt wm-s"/><path class="wm-deco xt92fd6te"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:package-check"} {...others} />);
}

export default Component;
