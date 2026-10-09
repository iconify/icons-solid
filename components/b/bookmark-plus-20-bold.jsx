import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x07oq7k1t.css';
import '../../css/h/h02a5vbhw.css';
import '../../css/b/bz2g1kbhd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x07oq7k1t"/><path class="h02a5vbhw"/><path class="bz2g1kbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bookmark-plus-20-bold"} {...others} />);
}

export default Component;
