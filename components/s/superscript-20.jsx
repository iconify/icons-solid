import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k50br_b8z.css';
import '../../css/t/t3e4vmwxh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k50br_b8z"/><path class="t3e4vmwxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:superscript-20"} {...others} />);
}

export default Component;
