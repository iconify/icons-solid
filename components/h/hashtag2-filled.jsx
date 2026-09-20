import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ad7wl963m.css';
import '../../css/n/nlcbroobe.css';
import '../../css/z/zzdvaient.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ad7wl963m"/><path class="nlcbroobe"/><path class="zzdvaient"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hashtag2-filled"} {...others} />);
}

export default Component;
