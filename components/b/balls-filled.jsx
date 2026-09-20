import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o2gi1z-2x.css';
import '../../css/z/z8b20vbir.css';
import '../../css/s/swxyxq2oi.css';
import '../../css/t/t7lq5vkcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o2gi1z-2x"/><path class="z8b20vbir"/><path clip-rule="evenodd" class="swxyxq2oi"/><path class="t7lq5vkcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:balls-filled"} {...others} />);
}

export default Component;
