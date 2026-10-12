import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dogt75f8d.css';
import '../../css/n/nha-p7yxm.css';
import '../../css/x/xc034mpfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dogt75f8d"/><path class="nha-p7yxm"/><path class="xc034mpfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:check-badge"} {...others} />);
}

export default Component;
