import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c_q-mnb_e.css';
import '../../css/u/u0zxb8b3u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="c_q-mnb_e"/><path class="u0zxb8b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:jnt"} {...others} />);
}

export default Component;
