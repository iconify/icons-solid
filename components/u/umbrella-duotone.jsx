import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxywzziat.css';
import '../../css/v/v1ed60bfu.css';
import '../../css/z/zazslsmwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fxywzziat"/><path clip-rule="evenodd" class="v1ed60bfu"/><path class="zazslsmwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:umbrella-duotone"} {...others} />);
}

export default Component;
