import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zngbw6b6l.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zngbw6b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-security-shield-2-shield-protection-security-defend-crime-war-cover"} {...others} />);
}

export default Component;
