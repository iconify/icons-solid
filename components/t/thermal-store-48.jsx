import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlgr2s59b.css';
import '../../css/s/s1z91sb8b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xlgr2s59b"/><path class="s1z91sb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-store-48"} {...others} />);
}

export default Component;
