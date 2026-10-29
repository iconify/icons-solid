import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b55os-lyu.css';
import '../../css/b/bkk0xnbka.css';
import '../../css/l/l4ok05b1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b55os-lyu"/><path class="bkk0xnbka"/><path class="l4ok05b1o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:newspaper"} {...others} />);
}

export default Component;
