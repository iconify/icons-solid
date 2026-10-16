import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ammh8jlyd.css';
import '../../css/i/iux9rx_ue.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ammh8jlyd"/><path class="iux9rx_ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:used-cooking-oil-20-bold"} {...others} />);
}

export default Component;
