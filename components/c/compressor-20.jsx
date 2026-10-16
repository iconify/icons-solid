import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5n2jta6r.css';
import '../../css/t/t8fe1nbtx.css';
import '../../css/e/eg1wrabcr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d5n2jta6r"/><path class="t8fe1nbtx"/><path class="eg1wrabcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compressor-20"} {...others} />);
}

export default Component;
