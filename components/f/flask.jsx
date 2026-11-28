import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g_-wzjb_l.css';
import '../../css/z/zxv-swbgq.css';
import '../../css/z/z8axxibzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="g_-wzjb_l"/><path class="zxv-swbgq"/><path class="z8axxibzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flask"} {...others} />);
}

export default Component;
