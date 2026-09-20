import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/whspc0b_i.css';
import '../../css/f/f67y05bux.css';
import '../../css/n/n7itbbc5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="whspc0b_i"/><path class="f67y05bux"/><path class="n7itbbc5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-linear"} {...others} />);
}

export default Component;
