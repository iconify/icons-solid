import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-s18fbbr.css';
import '../../css/p/p0vii7b4e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x-s18fbbr"/><path class="p0vii7b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-48"} {...others} />);
}

export default Component;
