import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zgjfmt9gx.css';
import '../../css/f/fi5rhr63a.css';
import '../../css/w/wwkwm_vbw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="zgjfmt9gx"/><path class="fi5rhr63a"/><path class="wwkwm_vbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:unlike"} {...others} />);
}

export default Component;
