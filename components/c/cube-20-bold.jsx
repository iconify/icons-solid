import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yozhcqskc.css';
import '../../css/t/tkfpxusan.css';
import '../../css/y/y9re-u6qy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yozhcqskc"/><path class="tkfpxusan"/><path class="y9re-u6qy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cube-20-bold"} {...others} />);
}

export default Component;
