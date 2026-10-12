import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gearfs_pf.css';
import '../../css/j/jvkgxnnfe.css';
import '../../css/s/sii0dxybr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gearfs_pf"/><rect transform="rotate(-90 4.49 19.51)" class="jvkgxnnfe"/><path class="sii0dxybr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:watch"} {...others} />);
}

export default Component;
