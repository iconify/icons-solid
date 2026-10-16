import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wf1yldbop.css';
import '../../css/d/d5ynaeb2l.css';
import '../../css/m/mx9ehddmk.css';
import '../../css/v/va8s-sbco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.27 19.12)" class="wf1yldbop"/><path class="d5ynaeb2l"/><path class="mx9ehddmk"/><rect transform="matrix(0 -1 -1 0 22.27 19.12)" class="va8s-sbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screen-share-warning"} {...others} />);
}

export default Component;
