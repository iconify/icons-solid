import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl8h52i2e.css';
import '../../css/w/wadzaq9on.css';
import '../../css/v/v5qe0mb6u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kl8h52i2e"/><path class="wadzaq9on"/><path class="v5qe0mb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:csharp"} {...others} />);
}

export default Component;
