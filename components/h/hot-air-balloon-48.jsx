import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7x4h2b-v.css';
import '../../css/j/jzue8hbld.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d7x4h2b-v"/><path class="jzue8hbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-air-balloon-48"} {...others} />);
}

export default Component;
