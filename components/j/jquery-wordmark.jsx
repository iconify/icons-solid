import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk77iabep.css';
import '../../css/i/it3-pwbqu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xk77iabep"/><path class="it3-pwbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:jquery-wordmark"} {...others} />);
}

export default Component;
