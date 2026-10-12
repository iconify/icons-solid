import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxwu0fb2r.css';
import '../../css/i/i11fypbyz.css';
import '../../css/z/zz61lgz8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxwu0fb2r"/><path clip-rule="evenodd" class="i11fypbyz"/><path class="zz61lgz8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-speaker-filled"} {...others} />);
}

export default Component;
