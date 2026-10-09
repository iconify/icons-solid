import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acvp9rbcm.css';
import '../../css/e/ev1t4gbmi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="acvp9rbcm"/><path class="ev1t4gbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-bottle-48"} {...others} />);
}

export default Component;
