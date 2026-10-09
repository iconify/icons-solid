import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv7_8fbub.css';
import '../../css/s/sgaegpv7c.css';
import '../../css/f/fv65liyxm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hv7_8fbub"/><path class="sgaegpv7c"/><path class="fv65liyxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-pull-request-20"} {...others} />);
}

export default Component;
