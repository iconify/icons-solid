import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b68x9qh8q.css';
import '../../css/w/w80_ihp8f.css';
import '../../css/k/k7gdhlbmx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b68x9qh8q"/><path class="w80_ihp8f"/><path class="k7gdhlbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-network-20-bold"} {...others} />);
}

export default Component;
