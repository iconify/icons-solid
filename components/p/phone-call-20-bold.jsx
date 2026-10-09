import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jozh0c8mh.css';
import '../../css/w/wred-9hyr.css';
import '../../css/o/o8obgx-hp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jozh0c8mh"/><path class="wred-9hyr"/><path class="o8obgx-hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-call-20-bold"} {...others} />);
}

export default Component;
