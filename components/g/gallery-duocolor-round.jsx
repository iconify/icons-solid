import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/npixvev1d.css';
import '../../css/m/m0ep4mc0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="npixvev1d"/><path class="m0ep4mc0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gallery-duocolor-round"} {...others} />);
}

export default Component;
