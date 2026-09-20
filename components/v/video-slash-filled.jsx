import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0jv6pbln.css';
import '../../css/f/fab031bju.css';
import '../../css/b/bwtd6wb2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h0jv6pbln"/><path class="fab031bju"/><path class="bwtd6wb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-slash-filled"} {...others} />);
}

export default Component;
