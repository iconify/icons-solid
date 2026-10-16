import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd9ctrbds.css';
import '../../css/h/h-zg-r21y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dd9ctrbds"/><path class="h-zg-r21y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:subscript-48-bold"} {...others} />);
}

export default Component;
