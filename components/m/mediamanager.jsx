import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc9_9gp3w.css';
import '../../css/c/cqrepab2x.css';
import '../../css/y/yd6ryz9vi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pc9_9gp3w"/><path class="cqrepab2x"/><path class="yd6ryz9vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediamanager"} {...others} />);
}

export default Component;
