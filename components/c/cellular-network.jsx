import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ophjqrt4l.css';
import '../../css/e/euedu3ulz.css';
import '../../css/q/q-hojtojq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ophjqrt4l"/><path class="euedu3ulz"/><path class="q-hojtojq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cellular-network"} {...others} />);
}

export default Component;
