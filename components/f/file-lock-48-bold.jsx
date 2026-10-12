import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frd-8-btx.css';
import '../../css/p/p9big2yaj.css';
import '../../css/u/uir1vq-bm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="frd-8-btx"/><path class="p9big2yaj"/><path class="uir1vq-bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-lock-48-bold"} {...others} />);
}

export default Component;
