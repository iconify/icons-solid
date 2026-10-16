import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-q-p1bwi.css';
import '../../css/t/tld7w6b8n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m-q-p1bwi"/><path class="tld7w6b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-check-20-bold"} {...others} />);
}

export default Component;
