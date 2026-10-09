import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pidvdx4pz.css';
import '../../css/h/hn9wklkoh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pidvdx4pz"/><path class="hn9wklkoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:id-card-20"} {...others} />);
}

export default Component;
