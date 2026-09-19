import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkgktuauf.css';
import '../../css/k/k-vylvb4s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dkgktuauf"/><path class="k-vylvb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:right-up2"} {...others} />);
}

export default Component;
