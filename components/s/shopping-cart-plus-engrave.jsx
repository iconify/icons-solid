import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h71ljzv1c.css';
import '../../css/n/nh91u75kb.css';
import '../../css/e/ec-z1vbok.css';
import '../../css/o/ocnol1b_l.css';
import '../../css/j/jjoj11miz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h71ljzv1c wm-k"/><path class="nh91u75kb wm-a"/><path class="ec-z1vbok wm-shadow"/><path class="ocnol1b_l wm-k"/><path class="jjoj11miz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-cart-plus-engrave"} {...others} />);
}

export default Component;
