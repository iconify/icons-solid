import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud8-gub-u.css';
import '../../css/d/da77vd8hl.css';
import '../../css/r/rrj52fbup.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ud8-gub-u"/><path class="da77vd8hl"/><path class="rrj52fbup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wave-buoy-48"} {...others} />);
}

export default Component;
