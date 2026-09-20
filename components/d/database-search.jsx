import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgbi_bb4g.css';
import '../../css/k/kb72m6b8r.css';
import '../../css/v/vbhsh_blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bgbi_bb4g"/><path class="kb72m6b8r"/><path class="vbhsh_blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:database-search"} {...others} />);
}

export default Component;
