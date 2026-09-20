import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad24vzb3z.css';
import '../../css/i/isj0b6b0u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ad24vzb3z"/><path class="isj0b6b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-file-error"} {...others} />);
}

export default Component;
