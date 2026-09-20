import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scbrlzbgc.css';
import '../../css/r/r8zl_v30g.css';
import '../../css/a/axyk0pfbi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="scbrlzbgc"/><path class="r8zl_v30g"/><path clip-rule="evenodd" class="axyk0pfbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:script-2-flat"} {...others} />);
}

export default Component;
