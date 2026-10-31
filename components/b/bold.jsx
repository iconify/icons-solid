import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vd-2g6p7l.css';
import '../../css/v/vt03ojb4o.css';
import '../../css/c/cyjcm_jmo.css';
import '../../css/x/xrbr28n_e.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vd-2g6p7l"/><path class="vt03ojb4o"/><path class="cyjcm_jmo wm-shine"/><path class="xrbr28n_e"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bold"} {...others} />);
}

export default Component;
