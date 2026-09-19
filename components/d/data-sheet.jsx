import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve5lq_olz.css';
import '../../css/q/qmbsycchv.css';
import '../../css/o/o3xhv7enl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ve5lq_olz"/><path class="qmbsycchv"/><path class="o3xhv7enl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:data-sheet"} {...others} />);
}

export default Component;
