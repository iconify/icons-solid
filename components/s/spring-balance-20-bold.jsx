import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqojcvb-w.css';
import '../../css/g/g64mwldzs.css';
import '../../css/b/bz5lwabqt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mqojcvb-w"/><path class="g64mwldzs"/><path class="bz5lwabqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spring-balance-20-bold"} {...others} />);
}

export default Component;
