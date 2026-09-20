import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oana6q3yt.css';
import '../../css/j/jwbs-piju.css';
import '../../css/d/dx93_50hj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="oana6q3yt"/><path class="jwbs-piju"/><path class="dx93_50hj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flask-round-sharp-duotone"} {...others} />);
}

export default Component;
