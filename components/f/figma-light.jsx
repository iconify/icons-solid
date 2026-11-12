import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbec9fl-o.css';
import '../../css/q/qcxpfgbgl.css';
import '../../css/i/i-k_57oki.css';
import '../../css/e/eux5nikfz.css';
import '../../css/y/y0zkh2w_l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wbec9fl-o"/><path class="qcxpfgbgl"/><circle class="i-k_57oki"/><path class="eux5nikfz"/><path class="y0zkh2w_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:figma-light"} {...others} />);
}

export default Component;
