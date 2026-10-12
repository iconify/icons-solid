import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5ur5r6_w.css';
import '../../css/q/qsr9eibbu.css';
import '../../css/u/uzutb_p5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q5ur5r6_w"/><path class="qsr9eibbu"/><path class="uzutb_p5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:helicopter"} {...others} />);
}

export default Component;
