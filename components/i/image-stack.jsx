import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gasfqu__j.css';
import '../../css/m/m3o5pwslp.css';
import '../../css/d/d-vo-mbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gasfqu__j"/><path clip-rule="evenodd" class="m3o5pwslp"/><path class="d-vo-mbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:image-stack"} {...others} />);
}

export default Component;
