import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ajfenzn0j.css';
import '../../css/c/c6bmv3q-h.css';
import '../../css/h/hpbrvm4rm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ajfenzn0j"/><path class="c6bmv3q-h"/><path class="hpbrvm4rm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:iris-scan"} {...others} />);
}

export default Component;
