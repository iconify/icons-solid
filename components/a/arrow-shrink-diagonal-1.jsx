import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb9_lwbtc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="fb9_lwbtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-shrink-diagonal-1"} {...others} />);
}

export default Component;
