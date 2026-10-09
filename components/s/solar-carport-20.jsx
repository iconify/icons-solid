import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skan8zbga.css';
import '../../css/w/w879yqieg.css';
import '../../css/g/g5cv3vban.css';
import '../../css/u/uxaudcccd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="skan8zbga"/><path class="w879yqieg"/><path class="g5cv3vban"/><path class="uxaudcccd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-carport-20"} {...others} />);
}

export default Component;
