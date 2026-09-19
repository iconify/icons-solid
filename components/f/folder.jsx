import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0l2657de.css';
import '../../css/c/c6cz_y-yn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l0l2657de"/><path class="c6cz_y-yn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:folder"} {...others} />);
}

export default Component;
