import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjc1-ubhn.css';
import '../../css/w/wtz7xm9oe.css';
import '../../css/x/x9f35ubbf.css';
import '../../css/f/f4g37sbnb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sjc1-ubhn"/><path class="wtz7xm9oe"/><path class="x9f35ubbf"/><path class="f4g37sbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:port-20"} {...others} />);
}

export default Component;
