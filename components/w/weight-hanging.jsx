import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxpm_ebjj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bxpm_ebjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:weight-hanging"} {...others} />);
}

export default Component;
