import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emvwi1bcs.css';
import '../../css/f/f-3_hbcnj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="emvwi1bcs"/><path class="f-3_hbcnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-to-line-20-bold"} {...others} />);
}

export default Component;
