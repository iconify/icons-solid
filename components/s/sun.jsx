import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c3y6s5b2y.css';
import '../../css/c/cgcn59-os.css';
import '../../css/d/dh4cojcej.css';
import '../../css/y/yi23eea4c.css';
import '../../css/z/zs295v-ni.css';
import '../../css/a/asf_erkmk.css';
import '../../css/e/e208zbbms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="c3y6s5b2y"/><path class="cgcn59-os"/><path class="dh4cojcej wm-shine"/><path class="wm-k yi23eea4c"/><path class="wm-a zs295v-ni"/><path class="asf_erkmk"/><path class="e208zbbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sun"} {...others} />);
}

export default Component;
