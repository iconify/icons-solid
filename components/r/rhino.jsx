import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jap6-8b4r.css';
import '../../css/u/u4iys0glr.css';
import '../../css/i/i7o6vnuwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jap6-8b4r"/><path clip-rule="evenodd" class="u4iys0glr"/><path clip-rule="evenodd" class="i7o6vnuwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:rhino"} {...others} />);
}

export default Component;
