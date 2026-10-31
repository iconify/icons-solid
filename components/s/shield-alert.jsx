import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wclbmvj7k.css';
import '../../css/j/jv6v4bcpo.css';
import '../../css/j/jdaq9-blq.css';
import '../../css/f/ff61wny5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wclbmvj7k wm-shadow"/><path class="jv6v4bcpo wm-shadow"/><path class="jdaq9-blq"/><path class="ff61wny5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shield-alert"} {...others} />);
}

export default Component;
