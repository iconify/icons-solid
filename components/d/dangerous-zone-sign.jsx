import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v86opfbei.css';
import '../../css/o/o-95uknwh.css';
import '../../css/v/v37j273ut.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v86opfbei"/><path class="o-95uknwh"/><path class="v37j273ut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dangerous-zone-sign"} {...others} />);
}

export default Component;
