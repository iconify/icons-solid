import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocp-zwjse.css';
import '../../css/z/znuj7bbnf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ocp-zwjse"/><path class="znuj7bbnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-arrow-left-stroke-20"} {...others} />);
}

export default Component;
