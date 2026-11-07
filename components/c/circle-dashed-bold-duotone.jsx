import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9vvgn11d.css';
import '../../css/t/t52mucocr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9vvgn11d"/><path class="t52mucocr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dashed-bold-duotone"} {...others} />);
}

export default Component;
