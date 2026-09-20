import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us8s3xbdr.css';
import '../../css/t/tnp71db6o.css';
import '../../css/y/y27_e5rxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="us8s3xbdr"/><path clip-rule="evenodd" class="tnp71db6o"/><path class="y27_e5rxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-bold-duotone"} {...others} />);
}

export default Component;
