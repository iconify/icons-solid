import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm-p03j5f.css';
import '../../css/k/k57qbuvoz.css';
import '../../css/b/bwg7bobur.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pm-p03j5f"/><path class="k57qbuvoz"/><path class="bwg7bobur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:headset-48"} {...others} />);
}

export default Component;
