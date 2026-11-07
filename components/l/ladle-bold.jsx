import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7zq275ci.css';
import '../../css/f/fzcjrqbtu.css';
import '../../css/t/tg66l2b1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k7zq275ci"/><path class="fzcjrqbtu"/><path class="tg66l2b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ladle-bold"} {...others} />);
}

export default Component;
