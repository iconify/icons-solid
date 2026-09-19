import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2lbpx99d.css';

const viewBox = {"width":1024,"height":614};
const content = `<path class="q2lbpx99d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:controllernes"} {...others} />);
}

export default Component;
