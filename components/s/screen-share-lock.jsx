import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kezjvzbor.css';
import '../../css/v/va8s-sbco.css';
import '../../css/r/ry6ohp7do.css';
import '../../css/v/v0-xaub1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kezjvzbor"/><rect transform="matrix(0 -1 -1 0 22.27 19.12)" class="va8s-sbco"/><rect class="ry6ohp7do"/><path class="v0-xaub1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screen-share-lock"} {...others} />);
}

export default Component;
