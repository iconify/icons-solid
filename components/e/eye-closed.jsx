import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqrkjk4za.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="eqrkjk4za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:eye-closed"} {...others} />);
}

export default Component;
