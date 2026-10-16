import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc1i690il.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oc1i690il"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-pellets-48-bold"} {...others} />);
}

export default Component;
