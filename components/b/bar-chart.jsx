import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9kryfb_n.css';
import '../../css/e/ed5g3xh8g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p9kryfb_n"/><path class="ed5g3xh8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bar-chart"} {...others} />);
}

export default Component;
