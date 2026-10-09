import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyxtagb8j.css';
import '../../css/p/pw9c74c9o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dyxtagb8j"/><path class="pw9c74c9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shower-48-bold"} {...others} />);
}

export default Component;
