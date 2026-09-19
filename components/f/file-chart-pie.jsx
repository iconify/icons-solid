import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4wfglb7q.css';
import '../../css/d/datb84q6e.css';
import '../../css/m/m9i7a_vaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="c4wfglb7q"/><path class="datb84q6e"/><path class="m9i7a_vaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-chart-pie"} {...others} />);
}

export default Component;
