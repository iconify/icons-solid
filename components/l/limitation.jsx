import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ops0tgbrx.css';
import '../../css/d/dcgw77bis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ops0tgbrx"/><circle class="dcgw77bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:limitation"} {...others} />);
}

export default Component;
