import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkglbdcce.css';
import '../../css/t/ts0tfxa1w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kkglbdcce"/><path class="ts0tfxa1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-at"} {...others} />);
}

export default Component;
