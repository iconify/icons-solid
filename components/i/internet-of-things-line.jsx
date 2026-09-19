import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5e08jbsb.css';
import '../../css/n/nwffqwsqj.css';
import '../../css/a/aexi2q7dr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="z5e08jbsb"/><path class="nwffqwsqj"/><path class="aexi2q7dr"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:internet-of-things-line"} {...others} />);
}

export default Component;
