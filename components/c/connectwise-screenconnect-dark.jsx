import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi9cg7bus.css';
import '../../css/c/c6xz9rq9g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bi9cg7bus"/><path class="c6xz9rq9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:connectwise-screenconnect-dark"} {...others} />);
}

export default Component;
