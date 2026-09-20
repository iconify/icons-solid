import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hiwbl5wru.css';
import '../../css/a/a0txdfblm.css';
import '../../css/g/gj5000b3u.css';
import '../../css/y/yeugq0hgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hiwbl5wru"/><path class="a0txdfblm"/><path class="gj5000b3u"/><path class="yeugq0hgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-rounded-bold"} {...others} />);
}

export default Component;
