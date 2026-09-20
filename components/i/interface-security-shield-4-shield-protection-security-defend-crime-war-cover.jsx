import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq9yik21i.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="iq9yik21i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-security-shield-4-shield-protection-security-defend-crime-war-cover"} {...others} />);
}

export default Component;
