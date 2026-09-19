import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/grihvgvxz.css';
import '../../css/e/eba2v5bks.css';
import '../../css/u/uy0ec1b-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="grihvgvxz"/><path class="eba2v5bks"/><path class="uy0ec1b-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:amazon"} {...others} />);
}

export default Component;
