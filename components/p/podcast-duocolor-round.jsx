import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_yr8yb8d.css';
import '../../css/r/rar5j9b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b_yr8yb8d"/><path class="rar5j9b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:podcast-duocolor-round"} {...others} />);
}

export default Component;
