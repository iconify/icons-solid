import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmpngjpsi.css';
import '../../css/q/qzvdi8qaf.css';
import '../../css/x/xi_w0vrbe.css';
import '../../css/n/n5wctwmmu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vmpngjpsi"/><path class="qzvdi8qaf"/><path class="xi_w0vrbe"/><path class="n5wctwmmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:truecommand"} {...others} />);
}

export default Component;
