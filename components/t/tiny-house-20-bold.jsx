import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3ncbbc7h.css';
import '../../css/w/wtrttcq8m.css';
import '../../css/t/tcplxobio.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c3ncbbc7h"/><path class="wtrttcq8m"/><path class="tcplxobio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tiny-house-20-bold"} {...others} />);
}

export default Component;
