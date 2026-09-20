import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbloczr4z.css';
import '../../css/p/p16id-nll.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ndfjvjb0x.css';
import '../../css/f/fh2q1qbmo.css';
import '../../css/c/cpjgc658y.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="hbloczr4z"/><path class="p16id-nll"/><g class="cuyn6tgcc"><path class="ndfjvjb0x"/><path class="fh2q1qbmo"/></g><path class="cpjgc658y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:pinch"} {...others} />);
}

export default Component;
