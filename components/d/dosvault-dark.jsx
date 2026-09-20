import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwuetm4pl.css';
import '../../css/c/cyucoabfv.css';
import '../../css/t/tsi3labku.css';
import '../../css/g/gnqkz_bnv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rwuetm4pl"/><path class="cyucoabfv"/><path class="tsi3labku"/><path class="gnqkz_bnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dosvault-dark"} {...others} />);
}

export default Component;
