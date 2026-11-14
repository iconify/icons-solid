import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yx2lqsd_d.css';
import '../../css/e/eeeta0sey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yx2lqsd_d"/><path class="eeeta0sey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-content-generator-02"} {...others} />);
}

export default Component;
