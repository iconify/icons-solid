import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6_t7vb5q.css';
import '../../css/k/ky_d4sbut.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w6_t7vb5q"/><path class="ky_d4sbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carabiner-48"} {...others} />);
}

export default Component;
