import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ys01xebuh.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ys01xebuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:double-quote-sans-left"} {...others} />);
}

export default Component;
