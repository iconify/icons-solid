import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz0wpbbiw.css';
import '../../css/m/mah8bbc0m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sz0wpbbiw"/><path class="mah8bbc0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pier-48"} {...others} />);
}

export default Component;
