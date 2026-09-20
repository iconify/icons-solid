import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wjgebtbst.css';
import '../../css/m/myatxhbsg.css';
import '../../css/o/ohv-qybzb.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(1 3)" class="bi12bsetm"><path class="wjgebtbst"/><path class="myatxhbsg"/><rect class="ohv-qybzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:tags"} {...others} />);
}

export default Component;
