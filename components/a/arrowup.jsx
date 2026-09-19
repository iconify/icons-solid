import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz-xmkcja.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="oz-xmkcja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:arrowup"} {...others} />);
}

export default Component;
