import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf1ji9q9l.css';
import '../../css/u/uhr4-1blb.css';
import '../../css/p/pwxyecb7m.css';
import '../../css/k/k06yp_3mz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mf1ji9q9l"/><path class="uhr4-1blb"/><path class="pwxyecb7m"/><path class="k06yp_3mz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-dashboard-20-bold"} {...others} />);
}

export default Component;
