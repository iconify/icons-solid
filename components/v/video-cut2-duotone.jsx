import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzp5hpbrr.css';
import '../../css/h/hk-wsgaqk.css';
import '../../css/j/j4b0cpb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gzp5hpbrr"/><path clip-rule="evenodd" class="hk-wsgaqk"/><path class="j4b0cpb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-cut2-duotone"} {...others} />);
}

export default Component;
