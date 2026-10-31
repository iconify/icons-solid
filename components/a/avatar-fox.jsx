import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/azo0ixbyg.css';
import '../../css/a/aueu53brv.css';
import '../../css/f/f3vrx991b.css';
import '../../css/z/zk416hbox.css';
import '../../css/o/o20c8rbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="azo0ixbyg wm-shadow"/><path class="aueu53brv"/><path class="f3vrx991b"/><path class="zk416hbox"/><path class="o20c8rbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-fox"} {...others} />);
}

export default Component;
