import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4_551p1s.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="q4_551p1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:arrow-left"} {...others} />);
}

export default Component;
