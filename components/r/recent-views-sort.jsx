import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8z6ahbzo.css';
import '../../css/v/vxyw4xdcm.css';
import '../../css/r/rcwouw81z.css';
import '../../css/c/ca0ewzx0f.css';
import '../../css/m/m91dx0b1e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="i8z6ahbzo"/><path class="vxyw4xdcm"/><path class="rcwouw81z"/><path class="ca0ewzx0f"/><path class="m91dx0b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:recent-views-sort"} {...others} />);
}

export default Component;
