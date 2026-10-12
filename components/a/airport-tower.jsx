import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yb6a_ib4d.css';
import '../../css/m/mye3znb3v.css';
import '../../css/g/grk9w7bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yb6a_ib4d"/><path class="mye3znb3v"/><path class="grk9w7bjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:airport-tower"} {...others} />);
}

export default Component;
