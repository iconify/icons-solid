import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejx6sqbnl.css';
import '../../css/u/uuh9nk8ah.css';
import '../../css/c/cyvnih9jt.css';
import '../../css/b/b9cxh-bmh.css';
import '../../css/n/n_9deq2bu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ejx6sqbnl"/><path class="uuh9nk8ah"/><path class="cyvnih9jt"/><path class="b9cxh-bmh"/><path class="n_9deq2bu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gmail"} {...others} />);
}

export default Component;
