import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsd-6j50u.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="lsd-6j50u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:diamond"} {...others} />);
}

export default Component;
