import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sad1i4_or.css';
import '../../css/o/o2fo5mb_f.css';
import '../../css/e/eb0q3sbid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sad1i4_or"/><path class="o2fo5mb_f"/><path class="eb0q3sbid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tree-palm"} {...others} />);
}

export default Component;
