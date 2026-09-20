import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-0lfcb7u.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="q-0lfcb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:arrow-both-direction-vertical-1"} {...others} />);
}

export default Component;
