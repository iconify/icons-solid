import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb2mawalq.css';
import '../../css/v/vzv6lusvh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eb2mawalq"/><path class="vzv6lusvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-bottle-48-bold"} {...others} />);
}

export default Component;
