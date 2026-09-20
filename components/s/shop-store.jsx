import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4-nrsbmo.css';
import '../../css/p/ppyb-dl-w.css';
import '../../css/n/nxu2qqbbu.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="m4-nrsbmo"/><path class="ppyb-dl-w"/><path class="nxu2qqbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:shop-store"} {...others} />);
}

export default Component;
