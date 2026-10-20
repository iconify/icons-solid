import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9h1pi52i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r9h1pi52i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caps-lock-20-bold"} {...others} />);
}

export default Component;
