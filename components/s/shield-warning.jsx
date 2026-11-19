import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5y4kzbgm.css';
import '../../css/w/wgdhbm08g.css';
import '../../css/o/o784y1sot.css';
import '../../css/a/aj2f_mbud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e5y4kzbgm"/><path class="wgdhbm08g"/><path class="o784y1sot"/><path class="aj2f_mbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shield-warning"} {...others} />);
}

export default Component;
