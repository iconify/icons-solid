import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7_s0d79d.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="e7_s0d79d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:get-pocket"} {...others} />);
}

export default Component;
