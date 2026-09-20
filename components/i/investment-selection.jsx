import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/h/hh9-_ie0d.css';
import '../../css/h/hc5pfcrmt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="hh9-_ie0d"/><path class="hc5pfcrmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:investment-selection"} {...others} />);
}

export default Component;
