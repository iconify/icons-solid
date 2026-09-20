import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqq126x0h.css';
import '../../css/v/vzdg82byd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="aqq126x0h"/><path class="vzdg82byd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:gloves"} {...others} />);
}

export default Component;
