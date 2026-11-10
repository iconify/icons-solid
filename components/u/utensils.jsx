import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w0c8bs52r.css';
import '../../css/h/hp5qfdcee.css';
import '../../css/a/aq-7hfb-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="w0c8bs52r"/><path class="hp5qfdcee"/><path class="aq-7hfb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:utensils"} {...others} />);
}

export default Component;
