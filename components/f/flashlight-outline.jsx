import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4xkvhbmt.css';
import '../../css/l/l09236icr.css';
import '../../css/q/qfnn6de1i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t4xkvhbmt"/><circle class="l09236icr"/><path class="qfnn6de1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:flashlight-outline"} {...others} />);
}

export default Component;
