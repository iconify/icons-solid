import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ig_an8pht.css';
import '../../css/e/e84fltbfd.css';
import '../../css/r/r_rvxacyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ig_an8pht"/><path class="e84fltbfd"/><path class="r_rvxacyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:programming-hold-code-2"} {...others} />);
}

export default Component;
