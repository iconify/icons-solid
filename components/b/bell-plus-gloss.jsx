import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sw_5q9yuc.css';
import '../../css/z/z98tup51i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="sw_5q9yuc wm-k"/><path class="wm-s z98tup51i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-plus-gloss"} {...others} />);
}

export default Component;
