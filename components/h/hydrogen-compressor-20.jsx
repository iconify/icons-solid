import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai3gqkb8w.css';
import '../../css/a/aga2wzbcv.css';
import '../../css/b/bgmlxcclc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ai3gqkb8w"/><path class="aga2wzbcv"/><path class="bgmlxcclc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-compressor-20"} {...others} />);
}

export default Component;
