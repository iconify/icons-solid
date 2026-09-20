import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z362cabze.css';
import '../../css/a/ad8mu8bes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z362cabze"/><path clip-rule="evenodd" class="ad8mu8bes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-smile"} {...others} />);
}

export default Component;
