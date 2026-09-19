import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zjpas3biq.css';
import '../../css/w/w738syxaa.css';
import '../../css/l/les279bft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zjpas3biq"/><path class="w738syxaa"/><path class="les279bft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spaghetti"} {...others} />);
}

export default Component;
