import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgg5pv8eb.css';
import '../../css/a/af0phaczy.css';
import '../../css/c/cxg28ucqs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zgg5pv8eb"/><path class="af0phaczy"/><path class="cxg28ucqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:dashboard-3"} {...others} />);
}

export default Component;
