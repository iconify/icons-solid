import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9sraxyyn.css';
import '../../css/n/n780s9bye.css';
import '../../css/w/w1kb5-rum.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v9sraxyyn"/><path class="n780s9bye"/><path class="w1kb5-rum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:color-picker"} {...others} />);
}

export default Component;
