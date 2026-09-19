import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2yiegdfw.css';
import '../../css/h/hiuezpb0a.css';
import '../../css/z/zoiufacpe.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m2yiegdfw"/><path class="hiuezpb0a"/><path clip-rule="evenodd" class="zoiufacpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:crown"} {...others} />);
}

export default Component;
