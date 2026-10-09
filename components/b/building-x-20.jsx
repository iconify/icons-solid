import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1kol59_x.css';
import '../../css/s/sk3pmyb5m.css';
import '../../css/h/h9o4a4caa.css';
import '../../css/k/kqbd9jytf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h1kol59_x"/><path class="sk3pmyb5m"/><path class="h9o4a4caa"/><path class="kqbd9jytf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-x-20"} {...others} />);
}

export default Component;
