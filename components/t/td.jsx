import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j0uptwbwv.css';
import '../../css/p/pu5v9vwih.css';
import '../../css/c/cyr97l9zo.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="j0uptwbwv"/><path class="pu5v9vwih"/><path class="cyr97l9zo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:td"} {...others} />);
}

export default Component;
