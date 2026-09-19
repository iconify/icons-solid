import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yfkp_fb7p.css';
import '../../css/s/s2wmt6buj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yfkp_fb7p"/><path class="s2wmt6buj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:logout-04"} {...others} />);
}

export default Component;
