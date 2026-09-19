import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nbb1ftj4o.css';
import '../../css/o/o9oyw409s.css';
import '../../css/t/tjnqk450w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="nbb1ftj4o"/><path class="o9oyw409s"/><path class="tjnqk450w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layers-02"} {...others} />);
}

export default Component;
