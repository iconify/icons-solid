import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4-gwpb0q.css';
import '../../css/o/o3015xv_o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z4-gwpb0q"/><path class="o3015xv_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:interconnector-20-bold"} {...others} />);
}

export default Component;
