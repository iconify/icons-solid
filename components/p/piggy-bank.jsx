import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ty6066u9d.css';
import '../../css/y/yh6dwbb2n.css';
import '../../css/f/fmnv7nb-g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ty6066u9d"/><path class="yh6dwbb2n"/><path class="fmnv7nb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:piggy-bank"} {...others} />);
}

export default Component;
