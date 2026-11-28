import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbz8wp1fs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbz8wp1fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:ceiling-lamp-check"} {...others} />);
}

export default Component;
