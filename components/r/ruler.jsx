import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dbsmvs45d.css';
import '../../css/x/xcfxd3vpd.css';
import '../../css/f/fmn_qacoy.css';
import '../../css/r/rzoychbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dbsmvs45d"/><path class="wm-shine xcfxd3vpd"/><path class="fmn_qacoy wm-k"/><path class="rzoychbjy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ruler"} {...others} />);
}

export default Component;
