import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og2b0zuoz.css';
import '../../css/f/fi2nkdbwg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="og2b0zuoz"/><path class="fi2nkdbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:copy-48"} {...others} />);
}

export default Component;
