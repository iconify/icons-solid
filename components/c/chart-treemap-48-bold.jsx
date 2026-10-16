import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thy5cttev.css';
import '../../css/t/t8l47cczo.css';
import '../../css/n/nke47iyqw.css';
import '../../css/y/y8h9w-q9d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="thy5cttev"/><path class="t8l47cczo"/><path class="nke47iyqw"/><path class="y8h9w-q9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-treemap-48-bold"} {...others} />);
}

export default Component;
