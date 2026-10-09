import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elpovvbol.css';
import '../../css/o/oc56z-biv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="elpovvbol"/><path class="oc56z-biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-half-48"} {...others} />);
}

export default Component;
