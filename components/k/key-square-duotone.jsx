import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xqs9_wbad.css';
import '../../css/p/po4-gbcxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xqs9_wbad"/><path class="po4-gbcxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:key-square-duotone"} {...others} />);
}

export default Component;
