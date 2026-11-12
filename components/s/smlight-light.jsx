import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0pgifn5c.css';
import '../../css/w/wg8i2zvek.css';
import '../../css/p/pn8gj6_kf.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="e0pgifn5c"/><circle class="wg8i2zvek"/><circle class="pn8gj6_kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:smlight-light"} {...others} />);
}

export default Component;
