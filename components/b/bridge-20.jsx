import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1t5mtm0a.css';
import '../../css/w/w1gklacoq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n1t5mtm0a"/><path class="w1gklacoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bridge-20"} {...others} />);
}

export default Component;
