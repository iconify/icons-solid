import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qh-4wbsxz.css';
import '../../css/g/gv1ls1b7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qh-4wbsxz"/><path class="gv1ls1b7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-pound"} {...others} />);
}

export default Component;
