import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_0ryua6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_0ryua6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-arrow-up-right-fill-round"} {...others} />);
}

export default Component;
