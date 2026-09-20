import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu26s_bte.css';
import '../../css/m/mje6qybkv.css';
import '../../css/l/l11flwi9t.css';
import '../../css/x/xob__rktb.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="bu26s_bte"/><path class="mje6qybkv"/><path class="l11flwi9t"/><path class="xob__rktb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:vuejs-light"} {...others} />);
}

export default Component;
