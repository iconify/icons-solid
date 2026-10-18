import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_pz3rxhk.css';
import '../../css/y/y6w07qbtw.css';
import '../../css/p/pfe8gjbwd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_pz3rxhk"/><path class="y6w07qbtw"/><path class="pfe8gjbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contract-for-difference-48-bold"} {...others} />);
}

export default Component;
