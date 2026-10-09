import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fa0o18b5j.css';
import '../../css/a/argg3sbnv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fa0o18b5j"/><path class="argg3sbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:egg-48"} {...others} />);
}

export default Component;
