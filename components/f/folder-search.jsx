import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nptq5hbmg.css';
import '../../css/g/gvyw62b2f.css';
import '../../css/f/fkvyx_w1h.css';
import '../../css/z/zwx5lublc.css';
import '../../css/k/k6fgatbyk.css';
import '../../css/j/jhxy1ubzv.css';
import '../../css/p/p0r71o_-m.css';
import '../../css/p/prgsb1ysx.css';
import '../../css/m/m45wmcc8f.css';
import '../../css/e/ejfm3oujc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nptq5hbmg wm-shadow"/><path class="gvyw62b2f wm-shadow"/><path class="fkvyx_w1h"/><path class="zwx5lublc"/><path class="k6fgatbyk"/><path class="jhxy1ubzv"/><path class="p0r71o_-m"/><path class="prgsb1ysx"/><path class="m45wmcc8f"/><path class="ejfm3oujc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:folder-search"} {...others} />);
}

export default Component;
