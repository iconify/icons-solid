import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codtw1b7i.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="codtw1b7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:error-multiple-filled"} {...others} />);
}

export default Component;
