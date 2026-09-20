import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idmd52b7b.css';
import '../../css/g/gqb61cbma.css';
import '../../css/c/c_criydpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="idmd52b7b"/><path class="gqb61cbma"/><path class="c_criydpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signpost-line-duotone"} {...others} />);
}

export default Component;
