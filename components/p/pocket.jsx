import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bigdckv_u.css';
import '../../css/z/z1rle4fds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bigdckv_u"/><path class="z1rle4fds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pocket"} {...others} />);
}

export default Component;
