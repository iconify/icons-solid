import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/he51opbeb.css';
import '../../css/b/byhkcgbib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="he51opbeb"/><path class="byhkcgbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dashboard-duocolor-round"} {...others} />);
}

export default Component;
