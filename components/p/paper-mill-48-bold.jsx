import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwjrqmb9j.css';
import '../../css/c/casff0y7v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mwjrqmb9j"/><path class="casff0y7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paper-mill-48-bold"} {...others} />);
}

export default Component;
