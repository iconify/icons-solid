import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alkyyoz5q.css';
import '../../css/u/up75blb-x.css';
import '../../css/q/qj1n_hbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="alkyyoz5q"/><path class="up75blb-x"/><path class="qj1n_hbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-duotone"} {...others} />);
}

export default Component;
