import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or51mp33s.css';
import '../../css/l/ljtl2bbyd.css';
import '../../css/m/mhsun10on.css';
import '../../css/o/oai19b_2d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="or51mp33s"/><path class="ljtl2bbyd"/><path class="mhsun10on"/><path class="oai19b_2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:asp-net-core"} {...others} />);
}

export default Component;
