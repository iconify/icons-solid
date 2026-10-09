import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pixuu6bja.css';
import '../../css/q/qlh3x2h3y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pixuu6bja"/><path class="qlh3x2h3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-48"} {...others} />);
}

export default Component;
