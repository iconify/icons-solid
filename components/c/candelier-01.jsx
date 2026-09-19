import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h89zv-nyh.css';
import '../../css/p/py_4ibbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h89zv-nyh"/><path class="py_4ibbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:candelier-01"} {...others} />);
}

export default Component;
