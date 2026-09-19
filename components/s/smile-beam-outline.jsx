import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lvo947bui.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/s/sleav579e.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lvo947bui"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path class="sleav579e"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:smile-beam-outline"} {...others} />);
}

export default Component;
