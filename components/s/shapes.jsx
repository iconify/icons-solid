import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8gffzc2p.css';
import '../../css/v/vx4b70buo.css';
import '../../css/c/cjj5npbyu.css';
import '../../css/s/s_-fqmtim.css';
import '../../css/z/zlyjzsu_j.css';
import '../../css/d/dwv4tsb6x.css';
import '../../css/n/nud677wgi.css';
import '../../css/y/y59b_5b5g.css';
import '../../css/j/jq132bcdb.css';
import '../../css/a/ah16bpgdv.css';
import '../../css/h/hlc8v8blk.css';
import '../../css/q/q3mpr1bey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8gffzc2p wm-shadow"/><path class="vx4b70buo wm-k"/><path class="cjj5npbyu wm-k"/><path class="s_-fqmtim wm-k"/><path class="wm-k zlyjzsu_j"/><path class="dwv4tsb6x wm-k"/><path class="nud677wgi wm-shine"/><path class="wm-a y59b_5b5g"/><path class="jq132bcdb wm-a"/><path class="ah16bpgdv wm-a"/><path class="hlc8v8blk wm-a"/><path class="q3mpr1bey wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:shapes"} {...others} />);
}

export default Component;
