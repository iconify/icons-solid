import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q06plnibn.css';
import '../../css/b/bb-6nmboa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q06plnibn"/><path class="bb-6nmboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rewind-20-bold"} {...others} />);
}

export default Component;
