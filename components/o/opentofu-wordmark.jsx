import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xauqnxols.css';
import '../../css/n/nm2lweb7o.css';
import '../../css/s/swrcwtb1z.css';
import '../../css/b/bogsmpsnl.css';
import '../../css/m/myhz4z0wa.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xauqnxols"/><path class="nm2lweb7o"/><path class="swrcwtb1z"/><path class="bogsmpsnl"/><path class="myhz4z0wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:opentofu-wordmark"} {...others} />);
}

export default Component;
