import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aawv9vq4e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="aawv9vq4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tag-with-baht"} {...others} />);
}

export default Component;
