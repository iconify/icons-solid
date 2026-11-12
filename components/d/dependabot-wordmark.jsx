import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_lja2bcd.css';
import '../../css/w/wmnla3ben.css';
import '../../css/p/ppxb-5bqg.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="p_lja2bcd"/><path class="wmnla3ben"/><path class="ppxb-5bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dependabot-wordmark"} {...others} />);
}

export default Component;
