import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxpyef0hm.css';
import '../../css/e/ext4fquee.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxpyef0hm"/><path class="ext4fquee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:school-filled"} {...others} />);
}

export default Component;
