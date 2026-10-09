import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3wg84b-p.css';
import '../../css/i/ikxx9ebbh.css';
import '../../css/z/zm9x9jbta.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o3wg84b-p"/><path class="ikxx9ebbh"/><path class="zm9x9jbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-scooter-48-bold"} {...others} />);
}

export default Component;
