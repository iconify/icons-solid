import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7-k3vx_v.css';
import '../../css/t/txo8pobhd.css';
import '../../css/m/mtna5qb0q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p7-k3vx_v"/><path class="txo8pobhd"/><path class="mtna5qb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-radial"} {...others} />);
}

export default Component;
