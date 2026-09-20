import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmc55qbpv.css';
import '../../css/p/p48_jkbmd.css';
import '../../css/g/gom_ccb7u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmc55qbpv"/><circle class="p48_jkbmd"/><circle class="gom_ccb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:global-threat-map-light"} {...others} />);
}

export default Component;
