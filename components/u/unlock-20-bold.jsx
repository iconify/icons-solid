import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq_b3258o.css';
import '../../css/h/his60jocq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aq_b3258o"/><path class="his60jocq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:unlock-20-bold"} {...others} />);
}

export default Component;
