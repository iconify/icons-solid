import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1qs6fb1h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h1qs6fb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dollar-swap-to-euro"} {...others} />);
}

export default Component;
