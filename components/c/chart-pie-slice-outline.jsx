import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w5m88eblv.css';
import '../../css/u/ud3unjb8b.css';
import '../../css/d/d31_4gbvv.css';
import '../../css/f/fxlo5tbrp.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w5m88eblv"/><path class="ud3unjb8b"/><path class="d31_4gbvv"/><path class="fxlo5tbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-pie-slice-outline"} {...others} />);
}

export default Component;
