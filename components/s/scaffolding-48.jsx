import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nft7035wh.css';
import '../../css/p/pd96bdi8m.css';
import '../../css/u/ujoab5bcl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nft7035wh"/><path class="pd96bdi8m"/><path class="ujoab5bcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scaffolding-48"} {...others} />);
}

export default Component;
