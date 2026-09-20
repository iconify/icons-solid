import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpvwby7ij.css';
import '../../css/h/h1qw7gi7h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lpvwby7ij"/><path class="h1qw7gi7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:power-meter"} {...others} />);
}

export default Component;
