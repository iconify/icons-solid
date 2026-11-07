import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6cqcqlkv.css';
import '../../css/j/jp5z67b1t.css';
import '../../css/k/kube8drda.css';
import '../../css/j/jf1pbcbud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6cqcqlkv"/><path class="jp5z67b1t"/><path class="kube8drda"/><path class="jf1pbcbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alarm-sleep-bold-duotone"} {...others} />);
}

export default Component;
