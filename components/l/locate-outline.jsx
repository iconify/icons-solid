import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f43p7lhjp.css';
import '../../css/l/lbpp58r_m.css';
import '../../css/d/dc686_elh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f43p7lhjp"/><path class="lbpp58r_m"/><path class="dc686_elh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:locate-outline"} {...others} />);
}

export default Component;
