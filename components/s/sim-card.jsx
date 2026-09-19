import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osmsw0baw.css';
import '../../css/u/u7-rv5cxi.css';
import '../../css/u/ujxr68ihv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="osmsw0baw"/><path class="u7-rv5cxi"/><path class="ujxr68ihv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:sim-card"} {...others} />);
}

export default Component;
