import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ens6xyutt.css';
import '../../css/e/eipj0bg2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ens6xyutt"/><path class="eipj0bg2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-edit-01"} {...others} />);
}

export default Component;
