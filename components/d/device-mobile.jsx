import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvx11z1dq.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="bvx11z1dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:device-mobile"} {...others} />);
}

export default Component;
