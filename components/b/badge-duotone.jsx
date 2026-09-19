import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqhxjsr4l.css';
import '../../css/s/sd4a-hbjg.css';
import '../../css/x/x7_6_gd4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jqhxjsr4l"/><path class="sd4a-hbjg"/><path class="x7_6_gd4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:badge-duotone"} {...others} />);
}

export default Component;
