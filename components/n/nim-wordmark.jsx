import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gijyo05ck.css';
import '../../css/l/l0-cexb8m.css';
import '../../css/a/a1k_o6b_u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gijyo05ck"/><path class="l0-cexb8m"/><path class="a1k_o6b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nim-wordmark"} {...others} />);
}

export default Component;
