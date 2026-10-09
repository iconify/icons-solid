import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmpmiyb4b.css';
import '../../css/v/v81ej1b9s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lmpmiyb4b"/><path class="v81ej1b9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wifi-medium-48-bold"} {...others} />);
}

export default Component;
