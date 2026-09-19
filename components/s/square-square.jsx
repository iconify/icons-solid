import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lhszwxb7f.css';
import '../../css/u/uklsy3_6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lhszwxb7f"/><path class="uklsy3_6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-square"} {...others} />);
}

export default Component;
