import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvyne8bgw.css';
import '../../css/z/zeqclcbxs.css';
import '../../css/i/ipw49hbcc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qvyne8bgw"/><path class="zeqclcbxs"/><path class="ipw49hbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:taskade-wordmark"} {...others} />);
}

export default Component;
