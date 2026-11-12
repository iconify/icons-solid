import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrb10v-km.css';
import '../../css/y/yhs-rpbzu.css';
import '../../css/t/t_aewkbjn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xrb10v-km"/><path class="yhs-rpbzu"/><path class="t_aewkbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-grids-dark"} {...others} />);
}

export default Component;
