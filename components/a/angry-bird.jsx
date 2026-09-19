import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e7s3h_45j.css';
import '../../css/x/x_v6dlman.css';
import '../../css/m/mg1b38bzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e7s3h_45j"/><path class="x_v6dlman"/><path class="mg1b38bzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:angry-bird"} {...others} />);
}

export default Component;
