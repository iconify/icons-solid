import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/q/q0m24db3d.css';
import '../../css/p/p3md5j9el.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="q0m24db3d"/><path class="p3md5j9el"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:align-to-middle"} {...others} />);
}

export default Component;
