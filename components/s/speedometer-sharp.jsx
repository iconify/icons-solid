import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9p5mvjco.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w9p5mvjco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:speedometer-sharp"} {...others} />);
}

export default Component;
