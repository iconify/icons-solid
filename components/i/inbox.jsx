import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/f/fgidgvscc.css';
import '../../css/t/td1_h-bnv.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="fgidgvscc"/><path class="td1_h-bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:inbox"} {...others} />);
}

export default Component;
