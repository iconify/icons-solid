import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ajqcms6oz.css';
import '../../css/t/tsfsykbbs.css';
import '../../css/r/rrf3ilijn.css';
import '../../css/o/oe-xab43p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ajqcms6oz"/><path class="tsfsykbbs"/><path class="rrf3ilijn"/><path class="oe-xab43p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-3-bold"} {...others} />);
}

export default Component;
