import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2j7_lbyc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k2j7_lbyc st0"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:redo"} {...others} />);
}

export default Component;
