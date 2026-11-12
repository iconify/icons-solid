import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrb10v-km.css';
import '../../css/y/yhs-rpbzu.css';
import '../../css/b/brbr3g9ba.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xrb10v-km"/><path class="yhs-rpbzu"/><path class="brbr3g9ba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-points-dark"} {...others} />);
}

export default Component;
