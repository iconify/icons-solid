import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/loc1oobaq.css';
import '../../css/w/w3lsaijhs.css';
import '../../css/y/yph-txb3i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="loc1oobaq"/><path class="w3lsaijhs"/><rect class="yph-txb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-time-clock-square-clock-loading-frame-measure-time-circle"} {...others} />);
}

export default Component;
