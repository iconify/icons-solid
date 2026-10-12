import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_2eyub1q.css';
import '../../css/r/ryau1hbhw.css';
import '../../css/t/t1ixq1bky.css';
import '../../css/w/wjj3ah6fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x_2eyub1q"/><path class="ryau1hbhw"/><path class="t1ixq1bky"/><path class="wjj3ah6fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tags-duotone"} {...others} />);
}

export default Component;
