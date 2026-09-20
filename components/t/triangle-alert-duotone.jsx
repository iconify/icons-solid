import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/snfm_wb7w.css';
import '../../css/t/tni6f7iwc.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="snfm_wb7w"/><path class="tni6f7iwc"/><path class="ju8v6k8zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:triangle-alert-duotone"} {...others} />);
}

export default Component;
