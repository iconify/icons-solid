import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1oyp4uhi.css';
import '../../css/q/qyfd5ps_s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b1oyp4uhi"/><path class="qyfd5ps_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calculator-20"} {...others} />);
}

export default Component;
