import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc0h2eget.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oc0h2eget"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:nav-security-findings"} {...others} />);
}

export default Component;
