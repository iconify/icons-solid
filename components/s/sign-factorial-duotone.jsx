import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/y/yj_vhp47s.css';
import '../../css/v/vg3nyvb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="yj_vhp47s"/><path class="vg3nyvb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-factorial-duotone"} {...others} />);
}

export default Component;
