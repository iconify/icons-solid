import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5ej5wb-a.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="e5ej5wb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-security-shield-1-shield-protection-security-defend-crime-war-cover"} {...others} />);
}

export default Component;
