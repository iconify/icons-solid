import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gworvlb7v.css';
import '../../css/u/udq7f4-hk.css';
import '../../css/a/a79tt-b_j.css';
import '../../css/g/gp-m6_bfl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gworvlb7v"/><path class="udq7f4-hk"/><path class="a79tt-b_j"/><path class="gp-m6_bfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cottage-20-bold"} {...others} />);
}

export default Component;
