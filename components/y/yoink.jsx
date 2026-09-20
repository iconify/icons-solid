import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec7pwm9zi.css';
import '../../css/w/wdns3gx2m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ec7pwm9zi"/><path class="wdns3gx2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yoink"} {...others} />);
}

export default Component;
