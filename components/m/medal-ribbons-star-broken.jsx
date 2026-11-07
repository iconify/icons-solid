import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pfjefkbxt.css';
import '../../css/n/nw92swb-t.css';
import '../../css/u/upow0ezwy.css';
import '../../css/h/hsdae9b6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pfjefkbxt"/><path class="nw92swb-t"/><path class="upow0ezwy"/><path class="hsdae9b6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbons-star-broken"} {...others} />);
}

export default Component;
