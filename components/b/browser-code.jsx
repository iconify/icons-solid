import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr_x1vbzj.css';
import '../../css/l/l8fxrac6r.css';
import '../../css/c/c_xenw62x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pr_x1vbzj"/><rect class="l8fxrac6r"/><path class="c_xenw62x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-code"} {...others} />);
}

export default Component;
