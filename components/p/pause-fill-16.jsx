import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pozmjpbgp.css';
import '../../css/v/vdcbkrbkq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><rect class="pozmjpbgp"/><rect class="vdcbkrbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pause-fill-16"} {...others} />);
}

export default Component;
