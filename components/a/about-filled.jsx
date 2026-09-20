import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnx7xtbvz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jnx7xtbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:about-filled"} {...others} />);
}

export default Component;
