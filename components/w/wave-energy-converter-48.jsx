import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpgv9kb_n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fpgv9kb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wave-energy-converter-48"} {...others} />);
}

export default Component;
