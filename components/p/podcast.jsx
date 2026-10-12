import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njus8yxpm.css';
import '../../css/z/z4la2vbhq.css';
import '../../css/t/tuk7e3b7s.css';
import '../../css/e/ecr21lb2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 14.74 17.85)" class="njus8yxpm"/><path class="z4la2vbhq"/><path class="tuk7e3b7s"/><path class="ecr21lb2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:podcast"} {...others} />);
}

export default Component;
