import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/koz4nrgjs.css';
import '../../css/s/st5lvs5dl.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="koz4nrgjs"/><path class="st5lvs5dl"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:generator-alert-48-bold"} {...others} />);
}

export default Component;
