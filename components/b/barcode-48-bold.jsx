import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpv1dkbiz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hpv1dkbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barcode-48-bold"} {...others} />);
}

export default Component;
