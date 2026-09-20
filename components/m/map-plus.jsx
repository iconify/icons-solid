import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz85g5bvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zz85g5bvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-plus"} {...others} />);
}

export default Component;
