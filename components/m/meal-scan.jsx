import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bqiwftbxg.css';
import '../../css/e/e1fmi_kkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bqiwftbxg"/><path class="e1fmi_kkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:meal-scan"} {...others} />);
}

export default Component;
