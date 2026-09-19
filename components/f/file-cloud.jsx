import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-j38rvvv.css';
import '../../css/m/m2_nxukxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s-j38rvvv"/><path class="m2_nxukxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-cloud"} {...others} />);
}

export default Component;
