import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a_spsac2f.css';
import '../../css/u/ux-yilqtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a_spsac2f"/><path class="ux-yilqtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:copy"} {...others} />);
}

export default Component;
