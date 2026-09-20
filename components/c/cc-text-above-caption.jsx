import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0jst6b5z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e0jst6b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cc-text-above-caption"} {...others} />);
}

export default Component;
