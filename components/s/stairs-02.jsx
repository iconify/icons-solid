import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uek8olv5j.css';
import '../../css/j/joveyip1f.css';
import '../../css/o/okmpui6ix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uek8olv5j"/><path class="joveyip1f"/><path class="okmpui6ix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stairs-02"} {...others} />);
}

export default Component;
