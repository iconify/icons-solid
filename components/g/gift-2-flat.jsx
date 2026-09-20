import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fyirgbi5v.css';
import '../../css/z/zvlweubvr.css';
import '../../css/u/ubel4_bjc.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fyirgbi5v"/><path class="zvlweubvr"/><path class="ubel4_bjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:gift-2-flat"} {...others} />);
}

export default Component;
