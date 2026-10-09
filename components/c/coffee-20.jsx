import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqni3wbon.css';
import '../../css/v/vmxlixb3w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqni3wbon"/><path class="vmxlixb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coffee-20"} {...others} />);
}

export default Component;
