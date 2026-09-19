import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r1absybzn.css';
import '../../css/i/iy57agh-c.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="r1absybzn"/><path class="iy57agh-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sort-numeric-up-alt"} {...others} />);
}

export default Component;
