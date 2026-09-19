import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_esyy1fg.css';
import '../../css/q/q542tnbix.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e_esyy1fg"/><path class="q542tnbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:like-twotone"} {...others} />);
}

export default Component;
