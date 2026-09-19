import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8dwnefac.css';
import '../../css/v/vsi_9nbmv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="d8dwnefac"/><path class="vsi_9nbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:replit-wordmark"} {...others} />);
}

export default Component;
