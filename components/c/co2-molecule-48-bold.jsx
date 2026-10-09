import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_7674bdo.css';
import '../../css/h/hx48xcbgj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a_7674bdo"/><path class="hx48xcbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-molecule-48-bold"} {...others} />);
}

export default Component;
