import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9tgqub2z.css';
import '../../css/l/l8g3b28gy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9tgqub2z"/><path class="l8g3b28gy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:address-book-48"} {...others} />);
}

export default Component;
