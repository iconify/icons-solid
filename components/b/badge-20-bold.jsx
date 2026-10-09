import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1w9q6o5b.css';
import '../../css/d/d9t-opb0z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c1w9q6o5b"/><path class="d9t-opb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-20-bold"} {...others} />);
}

export default Component;
