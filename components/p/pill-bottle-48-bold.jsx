import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxr2twvpp.css';
import '../../css/e/ebng-2bre.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cxr2twvpp"/><path class="ebng-2bre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pill-bottle-48-bold"} {...others} />);
}

export default Component;
