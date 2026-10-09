import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lstwdq_nx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lstwdq_nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cursor-click-48"} {...others} />);
}

export default Component;
