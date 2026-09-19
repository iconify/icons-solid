import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-pheobkb.css';
import '../../css/e/elhycobjb.css';
import '../../css/a/aetqlzb3s.css';
import '../../css/r/ri-i9cbrs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o-pheobkb"/><g class="elhycobjb"><path class="aetqlzb3s"/><path class="ri-i9cbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:bullish"} {...others} />);
}

export default Component;
