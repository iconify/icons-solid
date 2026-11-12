import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhwetz1ra.css';
import '../../css/e/ep2grliyt.css';
import '../../css/t/t1d4nlbha.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rhwetz1ra"/><path class="ep2grliyt"/><path class="t1d4nlbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calico-dark"} {...others} />);
}

export default Component;
