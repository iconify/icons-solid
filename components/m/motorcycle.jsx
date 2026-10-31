import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pv6bxdbuu.css';
import '../../css/x/x31j9rbre.css';
import '../../css/p/p_stqxvru.css';
import '../../css/e/exsxb309p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pv6bxdbuu wm-shadow"/><path class="x31j9rbre"/><path class="p_stqxvru"/><path class="exsxb309p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:motorcycle"} {...others} />);
}

export default Component;
