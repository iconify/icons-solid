import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he3ym7_zj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="he3ym7_zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:crosshair-square"} {...others} />);
}

export default Component;
