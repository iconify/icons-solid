import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlsr1qbum.css';
import '../../css/l/l59iq9btv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mlsr1qbum"/><path class="l59iq9btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-butt-20-bold"} {...others} />);
}

export default Component;
