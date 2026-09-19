import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsue9y5zg.css';
import '../../css/s/sfzd15p1h.css';
import '../../css/z/zc__otrgv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nsue9y5zg"/><path class="sfzd15p1h"/><path class="zc__otrgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:place"} {...others} />);
}

export default Component;
