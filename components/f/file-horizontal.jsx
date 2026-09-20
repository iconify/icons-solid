import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u_-uj42gh.css';
import '../../css/b/bwh2hvf-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u_-uj42gh"/><path class="bwh2hvf-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-horizontal"} {...others} />);
}

export default Component;
