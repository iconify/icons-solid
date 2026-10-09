import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhjv-fbep.css';
import '../../css/h/hkvtvtm6r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yhjv-fbep"/><path class="hkvtvtm6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:graduation-cap-48"} {...others} />);
}

export default Component;
