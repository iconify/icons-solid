import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuqh2nb0t.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="kuqh2nb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bot-sparkle-stroke-12"} {...others} />);
}

export default Component;
