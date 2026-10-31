import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mv0rgpaeg.css';
import '../../css/j/j2rqp5c2n.css';
import '../../css/t/twmw6cc7j.css';
import '../../css/r/rdfo331mt.css';
import '../../css/q/qrc5mfhay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mv0rgpaeg wm-shadow"/><path class="j2rqp5c2n"/><path class="twmw6cc7j"/><path class="rdfo331mt"/><path class="qrc5mfhay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:ticket-percent"} {...others} />);
}

export default Component;
