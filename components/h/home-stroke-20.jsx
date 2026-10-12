import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9kr3ubxk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p9kr3ubxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:home-stroke-20"} {...others} />);
}

export default Component;
