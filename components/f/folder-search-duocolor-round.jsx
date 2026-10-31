import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lkd3r2g0j.css';
import '../../css/o/osfl_dbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lkd3r2g0j"/><path class="osfl_dbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-search-duocolor-round"} {...others} />);
}

export default Component;
