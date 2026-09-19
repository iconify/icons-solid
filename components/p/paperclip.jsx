import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv1bw_b0n.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qv1bw_b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:paperclip"} {...others} />);
}

export default Component;
