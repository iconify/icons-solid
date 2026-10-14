import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v57c18mrt.css';
import '../../css/d/dto95jbvb.css';
import '../../css/v/vs6v5wbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v57c18mrt"/><circle class="dto95jbvb"/><circle class="vs6v5wbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:users-round-collaboration"} {...others} />);
}

export default Component;
