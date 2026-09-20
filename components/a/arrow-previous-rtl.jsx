import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of3k1s7ga.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="of3k1s7ga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:arrow-previous-rtl"} {...others} />);
}

export default Component;
