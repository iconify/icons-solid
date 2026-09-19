import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kjf-6mb1d.css';
import '../../css/l/lny61nbxl.css';
import '../../css/c/cokx9_blg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kjf-6mb1d"/><path class="lny61nbxl"/><path class="cokx9_blg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:share-location-01"} {...others} />);
}

export default Component;
