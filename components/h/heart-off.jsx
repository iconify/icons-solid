import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y0fx5ibmc.css';
import '../../css/s/s9e7hs-6k.css';
import '../../css/p/p66kmq1qt.css';
import '../../css/q/qaw0ipbvd.css';
import '../../css/z/zv-sa2iix.css';
import '../../css/c/cu8y70bhj.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow y0fx5ibmc"/><path class="s9e7hs-6k"/><path class="p66kmq1qt"/><path class="qaw0ipbvd"/><path class="zv-sa2iix"/><path class="cu8y70bhj"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heart-off"} {...others} />);
}

export default Component;
