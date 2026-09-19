import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tob96dp2q.css';
import '../../css/k/ki937_vam.css';
import '../../css/i/i2kyciuds.css';
import '../../css/t/t12s9ybmo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tob96dp2q"/><g class="ki937_vam"><path class="i2kyciuds"/><path class="t12s9ybmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:call-transfer"} {...others} />);
}

export default Component;
