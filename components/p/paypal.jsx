import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oxhmej08u.css';
import '../../css/u/utticpb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oxhmej08u"/><path class="utticpb4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paypal"} {...others} />);
}

export default Component;
