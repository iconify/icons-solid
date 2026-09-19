import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3wm-mdki.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i3wm-mdki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:terraform"} {...others} />);
}

export default Component;
