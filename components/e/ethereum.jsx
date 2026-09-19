import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvsna5bbi.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="dvsna5bbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:ethereum"} {...others} />);
}

export default Component;
