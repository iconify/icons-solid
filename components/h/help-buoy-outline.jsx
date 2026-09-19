import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnii4hccr.css';
import '../../css/s/sozjgdcyd.css';
import '../../css/x/xfox-b84f.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="rnii4hccr"/><circle class="sozjgdcyd"/><path class="xfox-b84f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:help-buoy-outline"} {...others} />);
}

export default Component;
