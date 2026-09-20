import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgbi_bb4g.css';
import '../../css/d/d1hl_6sib.css';
import '../../css/s/sdrxw8bwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bgbi_bb4g"/><path class="d1hl_6sib"/><path class="sdrxw8bwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:database-star"} {...others} />);
}

export default Component;
