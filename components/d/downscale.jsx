import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rs8t3jbwc.css';
import '../../css/i/iuiu_3all.css';
import '../../css/c/c58p8dfir.css';
import '../../css/k/k2q77bbek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 11.02 21.26)" class="rs8t3jbwc"/><rect transform="matrix(0 -1 -1 0 11.02 21.26)" class="iuiu_3all"/><path class="c58p8dfir"/><path class="k2q77bbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:downscale"} {...others} />);
}

export default Component;
