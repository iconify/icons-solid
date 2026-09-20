import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/holxpac7n.css';
import '../../css/r/ru25vmbbg.css';
import '../../css/i/ipq0bdtft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="holxpac7n"/><path class="ru25vmbbg"/><path class="ipq0bdtft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-opened-line-duotone"} {...others} />);
}

export default Component;
