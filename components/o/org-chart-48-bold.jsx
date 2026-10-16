import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t57i_tbgc.css';
import '../../css/d/ds0h63bwt.css';
import '../../css/m/mfzxk5a_d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t57i_tbgc"/><path class="ds0h63bwt"/><path class="mfzxk5a_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:org-chart-48-bold"} {...others} />);
}

export default Component;
