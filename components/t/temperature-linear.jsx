import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mzuq4x0dn.css';
import '../../css/k/ktz4j74-r.css';
import '../../css/w/w29ath28m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mzuq4x0dn"/><path class="ktz4j74-r"/><path class="w29ath28m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:temperature-linear"} {...others} />);
}

export default Component;
