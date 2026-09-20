import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjd5j7bep.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="vjd5j7bep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:agent"} {...others} />);
}

export default Component;
