import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n--7ht5np.css';
import '../../css/v/vjwgz3bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n--7ht5np"/><path class="vjwgz3bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:virus-lab-research-test-tube"} {...others} />);
}

export default Component;
