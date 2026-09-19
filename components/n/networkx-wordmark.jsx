import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu_kyabxq.css';
import '../../css/q/qevuypzfx.css';
import '../../css/m/mkh8dfbqu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hu_kyabxq"/><path class="qevuypzfx"/><path class="mkh8dfbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:networkx-wordmark"} {...others} />);
}

export default Component;
