import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0ytu37qx.css';
import '../../css/k/ka81hxn6e.css';
import '../../css/p/p6xu0eblp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m0ytu37qx"/><path class="ka81hxn6e"/><path class="p6xu0eblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:images-48-bold"} {...others} />);
}

export default Component;
