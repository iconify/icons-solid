import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmynu6bpt.css';
import '../../css/c/c8_g7taxa.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="lmynu6bpt"/><path clip-rule="evenodd" class="c8_g7taxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:water-drop-1"} {...others} />);
}

export default Component;
