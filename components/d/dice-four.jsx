import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkz5hvbck.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="rkz5hvbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:dice-four"} {...others} />);
}

export default Component;
