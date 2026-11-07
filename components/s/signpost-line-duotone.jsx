import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pf73k4bai.css';
import '../../css/g/gqb61cbma.css';
import '../../css/p/p4r57mjha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pf73k4bai"/><path class="gqb61cbma"/><path class="p4r57mjha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signpost-line-duotone"} {...others} />);
}

export default Component;
