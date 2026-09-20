import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/p/pu9dkg06k.css';
import '../../css/t/trw0sn6se.css';
import '../../css/x/x-z8xccjq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="pu9dkg06k"/><path class="trw0sn6se"/><path class="x-z8xccjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:charging"} {...others} />);
}

export default Component;
