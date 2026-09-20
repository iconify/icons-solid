import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geji5ur7w.css';
import '../../css/t/tke_5wp7o.css';
import '../../css/k/kqzenpjvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="geji5ur7w"/><path clip-rule="evenodd" class="tke_5wp7o"/><path clip-rule="evenodd" class="kqzenpjvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bacteria"} {...others} />);
}

export default Component;
