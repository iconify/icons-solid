import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3ijj1g6b.css';
import '../../css/y/y8xl5o4fl.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="n3ijj1g6b"/><path class="y8xl5o4fl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:host-line"} {...others} />);
}

export default Component;
