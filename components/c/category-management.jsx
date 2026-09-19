import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_7hthb3d.css';
import '../../css/i/iorsr0bkz.css';
import '../../css/s/sj_86q2hc.css';
import '../../css/d/dm9cfkb6z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="i_7hthb3d"/><path class="iorsr0bkz"/><circle class="sj_86q2hc"/><circle class="dm9cfkb6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:category-management"} {...others} />);
}

export default Component;
