import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1d8xacfz.css';
import '../../css/v/v3p8xz5ob.css';
import '../../css/l/lzxz9sbci.css';
import '../../css/y/y72mklb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u1d8xacfz"/><circle transform="rotate(90 12 12)" class="v3p8xz5ob"/><circle transform="rotate(90 12 12)" class="lzxz9sbci"/><path class="y72mklb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:locate"} {...others} />);
}

export default Component;
