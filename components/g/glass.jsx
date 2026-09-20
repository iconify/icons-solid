import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p03oabbgq.css';
import '../../css/u/u9xh5os5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p03oabbgq"/><path class="u9xh5os5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:glass"} {...others} />);
}

export default Component;
