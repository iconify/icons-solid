import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y4wpcei-y.css';
import '../../css/v/vb74khbao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y4wpcei-y"/><path class="vb74khbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:castle-01"} {...others} />);
}

export default Component;
