import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8c6_sbje.css';
import '../../css/r/rns1rzbsq.css';
import '../../css/d/di1kr24ia.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h8c6_sbje"/><path class="rns1rzbsq"/><path class="di1kr24ia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:dog-1"} {...others} />);
}

export default Component;
