import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2tk3pb5j.css';

const viewBox = {"width":896,"height":1024};
const content = `<path class="u2tk3pb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:batteryaltsixty"} {...others} />);
}

export default Component;
