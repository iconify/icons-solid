import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a60pyzb1b.css';
import '../../css/e/ejvwyfy7d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a60pyzb1b"/><path class="ejvwyfy7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signpost-20-bold"} {...others} />);
}

export default Component;
