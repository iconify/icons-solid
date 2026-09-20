import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kow-4gwby.css';
import '../../css/b/by8hs-7am.css';
import '../../css/k/k10rydwwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kow-4gwby"/><path class="by8hs-7am"/><path class="k10rydwwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:responsive-design-hand"} {...others} />);
}

export default Component;
