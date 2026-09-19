import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9aelcbhd.css';
import '../../css/m/mxjolcg6d.css';
import '../../css/s/sm2bgibef.css';
import '../../css/e/eutl42kwo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k9aelcbhd"/><path class="mxjolcg6d"/><circle class="sm2bgibef"/><path class="eutl42kwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:door"} {...others} />);
}

export default Component;
