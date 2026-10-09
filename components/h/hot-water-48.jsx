import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux4uf3b8j.css';
import '../../css/j/jyjbrnbyy.css';
import '../../css/k/ksb4xc21f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ux4uf3b8j"/><path class="jyjbrnbyy"/><path class="ksb4xc21f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-water-48"} {...others} />);
}

export default Component;
