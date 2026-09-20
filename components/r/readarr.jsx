import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vggs3v5pz.css';
import '../../css/r/rkl8mz6zh.css';
import '../../css/q/q8l603bxd.css';
import '../../css/r/runcquzpx.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vggs3v5pz"/><path class="rkl8mz6zh"/><path class="q8l603bxd"/><path class="runcquzpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:readarr"} {...others} />);
}

export default Component;
