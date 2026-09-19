import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egi7t0uie.css';
import '../../css/v/vnh2invat.css';
import '../../css/i/ixbj2wbiv.css';
import '../../css/a/a23i8nphm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="egi7t0uie"/><path class="vnh2invat"/><path class="ixbj2wbiv"/><path class="a23i8nphm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:nomobilephones"} {...others} />);
}

export default Component;
