import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtiqkbc8z.css';
import '../../css/b/blqzj_bfi.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vqf13jwfl.css';
import '../../css/y/yl3cscttg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qtiqkbc8z"/><path class="blqzj_bfi"/><g class="jn8qy4bru"><path class="vqf13jwfl"/><path class="yl3cscttg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:butter"} {...others} />);
}

export default Component;
