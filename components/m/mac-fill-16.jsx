import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox7k1oi8i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ox7k1oi8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:mac-fill-16"} {...others} />);
}

export default Component;
