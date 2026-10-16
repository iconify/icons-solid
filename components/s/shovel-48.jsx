import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2zpr60_w.css';
import '../../css/t/tx4fhibgn.css';
import '../../css/f/fj4vt1kml.css';
import '../../css/v/v2zc7vb1h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s2zpr60_w"/><path class="tx4fhibgn"/><path class="fj4vt1kml"/><path class="v2zc7vb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shovel-48"} {...others} />);
}

export default Component;
