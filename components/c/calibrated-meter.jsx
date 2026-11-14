import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dau6xu-gm.css';
import '../../css/i/ih0df-bqd.css';
import '../../css/i/i4uqfac5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="dau6xu-gm"/><rect class="ih0df-bqd"/><path class="i4uqfac5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:calibrated-meter"} {...others} />);
}

export default Component;
