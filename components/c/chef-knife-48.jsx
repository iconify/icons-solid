import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex6kn_g6k.css';
import '../../css/s/s1dmhkb6p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ex6kn_g6k"/><path class="s1dmhkb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chef-knife-48"} {...others} />);
}

export default Component;
