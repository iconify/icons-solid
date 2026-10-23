import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3t99xblo.css';
import '../../css/s/sfkdw1mdd.css';
import '../../css/k/k_gtu_bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o3t99xblo"/><path class="sfkdw1mdd"/><path class="k_gtu_bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-up-left-circle"} {...others} />);
}

export default Component;
