import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dkctlvbtg.css';
import '../../css/y/y3uowlb4h.css';
import '../../css/p/pihi_qbza.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dkctlvbtg"/><path class="y3uowlb4h"/><path class="pihi_qbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-lock"} {...others} />);
}

export default Component;
