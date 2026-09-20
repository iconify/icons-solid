import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5e_cby5o.css';
import '../../css/t/tncgtrlau.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m5e_cby5o"/><path class="tncgtrlau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:android-auto-dark"} {...others} />);
}

export default Component;
