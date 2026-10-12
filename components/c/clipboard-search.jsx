import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vughavogh.css';
import '../../css/k/kenz68bjj.css';
import '../../css/p/p7p0_0bwx.css';
import '../../css/w/wmhousu0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vughavogh"/><path class="kenz68bjj"/><rect transform="rotate(-90 7.33 5.59)" class="p7p0_0bwx"/><path class="wmhousu0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clipboard-search"} {...others} />);
}

export default Component;
