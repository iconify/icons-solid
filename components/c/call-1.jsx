import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meoj66rlz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="meoj66rlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:call-1"} {...others} />);
}

export default Component;
