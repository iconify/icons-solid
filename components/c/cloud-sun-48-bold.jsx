import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vubs4oo9h.css';
import '../../css/c/cohq8848r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vubs4oo9h"/><path class="cohq8848r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-sun-48-bold"} {...others} />);
}

export default Component;
