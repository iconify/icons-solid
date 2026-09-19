import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9vlg2rrz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m9vlg2rrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:ravelry"} {...others} />);
}

export default Component;
