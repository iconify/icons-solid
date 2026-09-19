import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjamo2zjs.css';
import '../../css/u/uyj_wk24z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jjamo2zjs"/><path class="uyj_wk24z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:house-01"} {...others} />);
}

export default Component;
