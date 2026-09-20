import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5-anxrtt.css';
import '../../css/n/n3dsnsnul.css';
import '../../css/b/bunov33is.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y5-anxrtt"/><path class="n3dsnsnul"/><path class="bunov33is"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:padlock-square-1-flat"} {...others} />);
}

export default Component;
