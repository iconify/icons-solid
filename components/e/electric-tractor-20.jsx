import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es2omsi-m.css';
import '../../css/x/x_aucnmpg.css';
import '../../css/q/qga5sxbrw.css';
import '../../css/x/xf67hjb0p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="es2omsi-m"/><path class="x_aucnmpg"/><path class="qga5sxbrw"/><path class="xf67hjb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-tractor-20"} {...others} />);
}

export default Component;
