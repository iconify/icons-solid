import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaytu0p-h.css';
import '../../css/x/x99a8bb3z.css';
import '../../css/x/x_e2j_srq.css';
import '../../css/u/u6_zhib1g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uaytu0p-h"/><path class="x99a8bb3z"/><path class="x_e2j_srq"/><path class="u6_zhib1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compressed-air-20-bold"} {...others} />);
}

export default Component;
