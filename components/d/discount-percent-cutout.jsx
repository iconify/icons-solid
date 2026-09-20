import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/k/k3bxz2bwg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ss8bevb4j"/><path class="k3bxz2bwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:discount-percent-cutout"} {...others} />);
}

export default Component;
