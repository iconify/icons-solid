import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jspcrab6z.css';
import '../../css/y/yvgtp5s0p.css';
import '../../css/a/am8x5_7hu.css';
import '../../css/t/t1i1reb0b.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jspcrab6z"/><path class="yvgtp5s0p"/><path class="am8x5_7hu"/><path class="t1i1reb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radarr-v1"} {...others} />);
}

export default Component;
