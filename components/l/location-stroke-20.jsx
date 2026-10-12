import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oanunl3eu.css';
import '../../css/l/l42y8cc0u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oanunl3eu"/><path class="l42y8cc0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:location-stroke-20"} {...others} />);
}

export default Component;
