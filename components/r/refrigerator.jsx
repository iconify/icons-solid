import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g5ihl6w8c.css';
import '../../css/g/g_qx38h4f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g5ihl6w8c"/><path class="g_qx38h4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:refrigerator"} {...others} />);
}

export default Component;
