import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kl65e73tu.css';
import '../../css/p/pjt-08bmc.css';
import '../../css/y/yg8cl3xrt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="kl65e73tu"/><path class="pjt-08bmc"/><path class="yg8cl3xrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bicycle-bike"} {...others} />);
}

export default Component;
