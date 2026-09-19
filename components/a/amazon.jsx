import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv5q-5cgz.css';
import '../../css/g/ga_k3d8mk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zv5q-5cgz"/><path class="ga_k3d8mk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:amazon"} {...others} />);
}

export default Component;
