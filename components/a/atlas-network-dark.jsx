import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev1riup_j.css';
import '../../css/h/hufvzydwy.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ev1riup_j"/><path class="hufvzydwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:atlas-network-dark"} {...others} />);
}

export default Component;
