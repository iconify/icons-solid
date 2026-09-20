import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3bc0lb3f.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="q3bc0lb3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:arrow-downward"} {...others} />);
}

export default Component;
