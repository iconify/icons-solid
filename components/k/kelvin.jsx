import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja8yhwb-i.css';
import '../../css/d/dl2zxihcb.css';
import '../../css/m/m82veobzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ja8yhwb-i"/><circle class="dl2zxihcb"/><path class="m82veobzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:kelvin"} {...others} />);
}

export default Component;
