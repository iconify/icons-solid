import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtkkymsak.css';
import '../../css/p/p3c5m7b3f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gtkkymsak"/><path class="p3c5m7b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rivet-20"} {...others} />);
}

export default Component;
