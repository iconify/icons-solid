import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2e1dmb6k.css';
import '../../css/u/up-8pq6ia.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m2e1dmb6k"/><path class="up-8pq6ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-shrink-3"} {...others} />);
}

export default Component;
