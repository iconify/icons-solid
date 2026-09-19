import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lh069obpf.css';
import '../../css/n/n9ed_lrtf.css';
import '../../css/h/h31pzubzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><circle class="lh069obpf"/><path class="n9ed_lrtf"/><path class="h31pzubzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:figma"} {...others} />);
}

export default Component;
