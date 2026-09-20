import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6gsaib6o.css';
import '../../css/s/s3t8_gbhj.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/w9-67fbcg.css';
import '../../css/n/nariwduko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t6gsaib6o"/><path clip-rule="evenodd" class="s3t8_gbhj"/><g class="mc2zb0bvp"><path class="w9-67fbcg"/><path class="nariwduko"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:album-bold-duotone"} {...others} />);
}

export default Component;
