import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/c-40n-h_v.css';
import '../../css/m/mlyz9w5wp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="c-40n-h_v"/><path class="mlyz9w5wp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:like-1"} {...others} />);
}

export default Component;
