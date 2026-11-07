import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a80tgwu0u.css';
import '../../css/x/xyha35u6p.css';
import '../../css/o/o7r3dj7hi.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a80tgwu0u"/><path class="xyha35u6p"/><path class="o7r3dj7hi"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-2-outline"} {...others} />);
}

export default Component;
