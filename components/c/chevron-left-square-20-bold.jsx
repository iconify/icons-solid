import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fec4cjbkq.css';
import '../../css/n/n4sn-05th.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fec4cjbkq"/><path class="n4sn-05th"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevron-left-square-20-bold"} {...others} />);
}

export default Component;
