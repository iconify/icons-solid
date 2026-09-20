import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd6mj9e-i.css';
import '../../css/d/dn5b1_f-b.css';
import '../../css/p/phprfuhss.css';
import '../../css/p/p6_7y-bmy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vd6mj9e-i"/><circle class="dn5b1_f-b"/><path class="phprfuhss"/><path class="p6_7y-bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chrome-canary"} {...others} />);
}

export default Component;
