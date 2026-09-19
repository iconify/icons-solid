import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emvqg1cza.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="emvqg1cza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:strikethrough"} {...others} />);
}

export default Component;
