import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjb55wb_o.css';
import '../../css/a/au-pn_blf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rjb55wb_o"/><path class="au-pn_blf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:atom-duocolor-round"} {...others} />);
}

export default Component;
