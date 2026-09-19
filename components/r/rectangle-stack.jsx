import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd6sy5lsi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hd6sy5lsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:rectangle-stack"} {...others} />);
}

export default Component;
