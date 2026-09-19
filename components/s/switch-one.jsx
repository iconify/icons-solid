import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/muvtlrodu.css';
import '../../css/z/zjxs2ab_r.css';
import '../../css/v/v-sv08b6n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="muvtlrodu"/><rect transform="rotate(90 36.006 19.334)" class="zjxs2ab_r"/><rect transform="rotate(-180 36.006 29.852)" class="v-sv08b6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:switch-one"} {...others} />);
}

export default Component;
