import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucf8wnbem.css';
import '../../css/y/y479ucc5d.css';
import '../../css/a/ayqtcwb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ucf8wnbem"/><path clip-rule="evenodd" class="y479ucc5d"/><path class="ayqtcwb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:upload-track-duotone"} {...others} />);
}

export default Component;
