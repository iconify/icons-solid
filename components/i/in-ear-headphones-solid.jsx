import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0jvsm82e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q0jvsm82e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:in-ear-headphones-solid"} {...others} />);
}

export default Component;
