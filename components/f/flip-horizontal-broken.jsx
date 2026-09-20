import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zzi-2vfyi.css';
import '../../css/s/s9_zw2bis.css';
import '../../css/p/pm1ejrbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zzi-2vfyi"/><path class="s9_zw2bis"/><path class="pm1ejrbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-horizontal-broken"} {...others} />);
}

export default Component;
