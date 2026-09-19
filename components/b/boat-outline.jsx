import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay3i2kbgt.css';
import '../../css/h/hgch7obpd.css';
import '../../css/h/hs4od_bjy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ay3i2kbgt"/><path class="hgch7obpd"/><path class="hs4od_bjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:boat-outline"} {...others} />);
}

export default Component;
