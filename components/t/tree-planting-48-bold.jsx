import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihmii9b0s.css';
import '../../css/w/w-me-sb1b.css';
import '../../css/u/urmzceb0n.css';
import '../../css/b/b-1wnc-ph.css';
import '../../css/a/a6j7g-bmp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ihmii9b0s"/><path class="w-me-sb1b"/><path class="urmzceb0n"/><path class="b-1wnc-ph"/><path class="a6j7g-bmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tree-planting-48-bold"} {...others} />);
}

export default Component;
