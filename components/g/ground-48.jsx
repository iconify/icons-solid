import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejop8g90f.css';
import '../../css/j/jqoq2wbcp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ejop8g90f"/><path class="jqoq2wbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-48"} {...others} />);
}

export default Component;
