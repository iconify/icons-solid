import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pscmmybmb.css';
import '../../css/k/kfr1grbjb.css';
import '../../css/y/y4ucstbhp.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="pscmmybmb"/><path class="kfr1grbjb"/><circle class="y4ucstbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:instagram-original"} {...others} />);
}

export default Component;
