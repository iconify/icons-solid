import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hweq7gb3i.css';
import '../../css/v/v536k8--o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hweq7gb3i"/><path class="v536k8--o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-48-bold"} {...others} />);
}

export default Component;
