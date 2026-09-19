import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q0p7ghg8g.css';
import '../../css/i/i6mg8vewc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="q0p7ghg8g"/><path class="i6mg8vewc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:tau"} {...others} />);
}

export default Component;
