import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bqgw1lbjy.css';
import '../../css/f/fqvkhg-ce.css';
import '../../css/g/gv-44ob-y.css';
import '../../css/p/pjrvv3c_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bqgw1lbjy"/><path class="fqvkhg-ce"/><path class="gv-44ob-y"/><path class="pjrvv3c_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:lift-1"} {...others} />);
}

export default Component;
