import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/j/j8wdgmbqs.css';
import '../../css/n/np3_17o5d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="j8wdgmbqs"/><path class="np3_17o5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:adobe-id"} {...others} />);
}

export default Component;
