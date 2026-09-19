import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vkig2-b7i.css';
import '../../css/g/gkmld7b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vkig2-b7i"/><path class="gkmld7b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:warehouse"} {...others} />);
}

export default Component;
