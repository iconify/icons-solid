import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf377wm0d.css';
import '../../css/y/yxdjjhbix.css';
import '../../css/b/b5e6xqblm.css';
import '../../css/t/t6vjqsiao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xf377wm0d"/><path class="yxdjjhbix"/><path class="b5e6xqblm"/><path class="t6vjqsiao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:presentation-graph-bold-duotone"} {...others} />);
}

export default Component;
