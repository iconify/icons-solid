import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/howz77bms.css';
import '../../css/i/i1ggakb8s.css';
import '../../css/e/e31pz4epa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="howz77bms"/><path class="i1ggakb8s"/><path class="e31pz4epa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flood-defence-20-bold"} {...others} />);
}

export default Component;
