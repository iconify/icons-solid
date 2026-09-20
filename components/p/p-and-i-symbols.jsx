import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egumi9b1d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="egumi9b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:p-and-i-symbols"} {...others} />);
}

export default Component;
