import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3ymvob2k.css';
import '../../css/c/cpgpwjcjz.css';
import '../../css/q/qdsd67btr.css';
import '../../css/v/vrvtrabsk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="n3ymvob2k"/><path class="cpgpwjcjz"/><path class="qdsd67btr"/><path class="vrvtrabsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tickets"} {...others} />);
}

export default Component;
