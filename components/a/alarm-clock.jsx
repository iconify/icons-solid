import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1vjxgbrn.css';
import '../../css/j/j2qx5-bth.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s1vjxgbrn"/><path class="j2qx5-bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:alarm-clock"} {...others} />);
}

export default Component;
