import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqnmyv01r.css';
import '../../css/e/e9vb7gbyc.css';
import '../../css/c/cnfzookvu.css';
import '../../css/i/in5oaybmh.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="cqnmyv01r"/><path class="e9vb7gbyc"/><path class="cnfzookvu"/><path class="in5oaybmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:bug-duo"} {...others} />);
}

export default Component;
