import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3jt7lijj.css';
import '../../css/t/tl3piacvt.css';
import '../../css/z/zw5s43bbo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3jt7lijj wm-k"/><path class="tl3piacvt wm-a"/><path class="wm-a zw5s43bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-ordered"} {...others} />);
}

export default Component;
