import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5skxtb6n.css';
import '../../css/n/njarltr6p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t5skxtb6n"/><path class="njarltr6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:log-in-rtl"} {...others} />);
}

export default Component;
