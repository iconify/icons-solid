import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8jnmpbyj.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="i8jnmpbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:ticket"} {...others} />);
}

export default Component;
