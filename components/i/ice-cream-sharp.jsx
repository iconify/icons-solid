import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm0h_i9fz.css';
import '../../css/g/gt-wt7bqy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bm0h_i9fz"/><path class="gt-wt7bqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ice-cream-sharp"} {...others} />);
}

export default Component;
