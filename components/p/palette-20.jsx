import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cves0rbaa.css';
import '../../css/n/na5i4bcyj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cves0rbaa"/><path class="na5i4bcyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:palette-20"} {...others} />);
}

export default Component;
