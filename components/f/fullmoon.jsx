import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm63k1bpv.css';
import '../../css/g/ggrxmcksm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fm63k1bpv"/><path class="ggrxmcksm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fullmoon"} {...others} />);
}

export default Component;
