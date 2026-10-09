import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7n36ms-b.css';
import '../../css/a/a1wp-ubtq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x7n36ms-b"/><path class="a1wp-ubtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-open-48-bold"} {...others} />);
}

export default Component;
