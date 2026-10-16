import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moyoz5fkv.css';
import '../../css/f/fe7lf8b9s.css';
import '../../css/f/fcqcyrnly.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="moyoz5fkv"/><path class="fe7lf8b9s"/><path class="fcqcyrnly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steering-wheel-48-bold"} {...others} />);
}

export default Component;
