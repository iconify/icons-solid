import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x07oq7k1t.css';
import '../../css/b/b53sk69qk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x07oq7k1t"/><path class="b53sk69qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bookmark-check-20-bold"} {...others} />);
}

export default Component;
