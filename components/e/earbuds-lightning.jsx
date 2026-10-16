import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khzy_gpyd.css';
import '../../css/h/h_48ptbmm.css';
import '../../css/p/pje2yreey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="khzy_gpyd"/><path class="h_48ptbmm"/><path class="pje2yreey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds-lightning"} {...others} />);
}

export default Component;
