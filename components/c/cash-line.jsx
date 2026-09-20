import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a37f418yp.css';
import '../../css/a/adjgelb-v.css';
import '../../css/m/m01tqt6ee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a37f418yp"/><path class="adjgelb-v"/><path class="m01tqt6ee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:cash-line"} {...others} />);
}

export default Component;
