import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7goi0bav.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b7goi0bav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:hurt-3"} {...others} />);
}

export default Component;
