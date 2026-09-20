import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yy_jkmojz.css';
import '../../css/p/p2m6bbx_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yy_jkmojz"/><path class="p2m6bbx_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wifi"} {...others} />);
}

export default Component;
