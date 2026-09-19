import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o-9h659ll.css';
import '../../css/m/mlwa6977n.css';

const viewBox = {"width":84,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o-9h659ll"/><path class="mlwa6977n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:cogs"} {...others} />);
}

export default Component;
