import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b79z_ipds.css';
import '../../css/j/jma2uubte.css';
import '../../css/p/pcr75dyvp.css';
import '../../css/m/mu-e1vmsy.css';
import '../../css/e/ec7pvbb9m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="b79z_ipds"/><circle class="jma2uubte"/><circle class="pcr75dyvp"/><path class="mu-e1vmsy"/><path class="ec7pvbb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:subway"} {...others} />);
}

export default Component;
