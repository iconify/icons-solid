import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjfbrs2od.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zjfbrs2od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-spring-48-bold"} {...others} />);
}

export default Component;
