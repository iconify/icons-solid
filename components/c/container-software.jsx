import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sw59wdbrq.css';
import '../../css/e/eyc11k90x.css';
import '../../css/k/kp_ro9o2o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sw59wdbrq"/><path class="eyc11k90x"/><path class="kp_ro9o2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:container-software"} {...others} />);
}

export default Component;
