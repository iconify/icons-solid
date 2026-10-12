import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drh7ykbqj.css';
import '../../css/t/t58ccbcro.css';
import '../../css/f/fy9l77d_f.css';
import '../../css/u/ua4j05bbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="drh7ykbqj"/><path class="t58ccbcro"/><path class="fy9l77d_f"/><path class="ua4j05bbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:dog-duotone"} {...others} />);
}

export default Component;
