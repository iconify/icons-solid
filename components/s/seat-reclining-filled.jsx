import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/htdgk3bkf.css';
import '../../css/z/zszqql2bz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="htdgk3bkf"/><path clip-rule="evenodd" class="zszqql2bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:seat-reclining-filled"} {...others} />);
}

export default Component;
