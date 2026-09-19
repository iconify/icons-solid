import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzzb4x5sj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xzzb4x5sj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:calendar"} {...others} />);
}

export default Component;
