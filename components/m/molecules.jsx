import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fhzkr4_3z.css';
import '../../css/n/npzbi206w.css';
import '../../css/q/qtxsezbbm.css';
import '../../css/o/o1u583b9p.css';
import '../../css/v/v2dxglbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="fhzkr4_3z"/><circle class="npzbi206w"/><circle class="qtxsezbbm"/><circle class="o1u583b9p"/><path class="v2dxglbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:molecules"} {...others} />);
}

export default Component;
