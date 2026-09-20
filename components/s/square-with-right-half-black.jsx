import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pftkz0z8c.css';
import '../../css/v/vjgfrpbtc.css';
import '../../css/i/ilo4x8b6d.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mehba9vbc.css';
import '../../css/e/e6nbv9jee.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pftkz0z8c"/><path class="vjgfrpbtc"/><path class="ilo4x8b6d"/><g class="brzn_0bpr"><path class="mehba9vbc"/><path class="e6nbv9jee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:square-with-right-half-black"} {...others} />);
}

export default Component;
