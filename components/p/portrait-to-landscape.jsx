import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzv7a-f0d.css';
import '../../css/e/ey9gwwbqb.css';
import '../../css/z/ztjc-eycb.css';
import '../../css/w/w45v9234z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 11.64 21.34)" class="wzv7a-f0d"/><rect transform="matrix(0 -1 -1 0 11.63 21.34)" class="ey9gwwbqb"/><path class="ztjc-eycb"/><path class="w45v9234z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:portrait-to-landscape"} {...others} />);
}

export default Component;
