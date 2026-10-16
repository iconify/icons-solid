import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g15t1bclt.css';
import '../../css/j/j0qwephmf.css';
import '../../css/q/qq-n_ibfl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g15t1bclt"/><path class="j0qwephmf"/><path class="qq-n_ibfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-treatment-48-bold"} {...others} />);
}

export default Component;
