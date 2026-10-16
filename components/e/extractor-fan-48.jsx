import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5i9cpbbm.css';
import '../../css/c/cc-1-6bif.css';
import '../../css/n/nbl98olvj.css';
import '../../css/j/j5zi96b7l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x5i9cpbbm"/><path class="cc-1-6bif"/><path class="nbl98olvj"/><path class="j5zi96b7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:extractor-fan-48"} {...others} />);
}

export default Component;
