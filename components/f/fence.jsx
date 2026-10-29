import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtvfn0bjz.css';
import '../../css/h/h7lq5qbxj.css';
import '../../css/t/t_z9exbfe.css';
import '../../css/c/cjp4akz4m.css';
import '../../css/m/mmt5d65bi.css';
import '../../css/g/gjvgm1a_g.css';
import '../../css/x/xvsa80bzr.css';
import '../../css/y/yc9rx5b-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtvfn0bjz wm-shadow"/><path class="h7lq5qbxj wm-k"/><path class="t_z9exbfe wm-k"/><path class="cjp4akz4m wm-k"/><path class="mmt5d65bi wm-k"/><path class="gjvgm1a_g wm-k"/><path class="wm-shine xvsa80bzr"/><path class="wm-a yc9rx5b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:fence"} {...others} />);
}

export default Component;
