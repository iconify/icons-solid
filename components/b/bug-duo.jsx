import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e127p9cjs.css';
import '../../css/i/izvj3goyw.css';
import '../../css/l/louq1sjgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e127p9cjs"/><path class="izvj3goyw wm-a"/><path class="louq1sjgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bug-duo"} {...others} />);
}

export default Component;
