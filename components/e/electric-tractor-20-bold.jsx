import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so0s9blxr.css';
import '../../css/t/tl7g9qbzd.css';
import '../../css/w/wc10gcirv.css';
import '../../css/w/w313iqk2o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="so0s9blxr"/><path class="tl7g9qbzd"/><path class="wc10gcirv"/><path class="w313iqk2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-tractor-20-bold"} {...others} />);
}

export default Component;
