import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liufp_b5i.css';
import '../../css/m/mgw7p7bzi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="liufp_b5i"/><path class="mgw7p7bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:iron-20"} {...others} />);
}

export default Component;
