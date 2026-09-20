import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/emlx1ccps.css';
import '../../css/x/xe6yhc7ab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="emlx1ccps"/><path class="xe6yhc7ab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pin-tack-filled"} {...others} />);
}

export default Component;
