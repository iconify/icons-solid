import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h4nn6ue7a.css';
import '../../css/h/h0im107ld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h4nn6ue7a"/><path class="h0im107ld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:logic-nor"} {...others} />);
}

export default Component;
