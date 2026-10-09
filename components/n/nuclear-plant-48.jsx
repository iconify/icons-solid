import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k16ypzb4q.css';
import '../../css/o/o2az-abuy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k16ypzb4q"/><path class="o2az-abuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-plant-48"} {...others} />);
}

export default Component;
