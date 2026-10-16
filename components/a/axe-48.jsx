import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwf5pgm1r.css';
import '../../css/d/d_be55btx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uwf5pgm1r"/><path class="d_be55btx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:axe-48"} {...others} />);
}

export default Component;
