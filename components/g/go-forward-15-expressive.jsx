import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0-ym0vcj.css';
import '../../css/i/im_tqjpdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p0-ym0vcj"/><path class="im_tqjpdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:go-forward-15-expressive"} {...others} />);
}

export default Component;
