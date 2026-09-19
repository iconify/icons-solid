import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqn8tyz7h.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="lqn8tyz7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:cursor-arrow-ripple"} {...others} />);
}

export default Component;
