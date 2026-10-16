import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/daeckebuf.css';
import '../../css/s/sx8ya7bam.css';
import '../../css/a/a6034rvxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="daeckebuf"/><path class="sx8ya7bam"/><path class="a6034rvxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cursor-click"} {...others} />);
}

export default Component;
