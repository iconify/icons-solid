import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcoptabrr.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gcoptabrr"/><path class="f5bqv3-2b"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:star-plus-48"} {...others} />);
}

export default Component;
