import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj1y5cbbe.css';
import '../../css/j/j8h-reucj.css';
import '../../css/d/dit17kuus.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jj1y5cbbe"/><path class="j8h-reucj"/><path class="dit17kuus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-bond-48-bold"} {...others} />);
}

export default Component;
