import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_zapkb4e.css';
import '../../css/b/bzjma2ixc.css';
import '../../css/j/j7bp16hpn.css';
import '../../css/b/bctrsisbu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="s_zapkb4e"/><path class="bzjma2ixc"/><circle class="j7bp16hpn"/><circle class="bctrsisbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:category-management"} {...others} />);
}

export default Component;
