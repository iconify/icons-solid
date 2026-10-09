import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgy1l_tlx.css';
import '../../css/i/icm3m1b8n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hgy1l_tlx"/><path class="icm3m1b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-20-bold"} {...others} />);
}

export default Component;
