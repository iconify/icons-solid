import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yb2cpe_ck.css';
import '../../css/r/r99rrlbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yb2cpe_ck"/><path class="r99rrlbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-roundabout-left"} {...others} />);
}

export default Component;
