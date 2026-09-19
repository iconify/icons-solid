import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m58734bmb.css';
import '../../css/b/b3dakxwyz.css';
import '../../css/n/n8ps1yhvj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m58734bmb"/><path class="b3dakxwyz"/><path class="n8ps1yhvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:leetcode-wordmark"} {...others} />);
}

export default Component;
