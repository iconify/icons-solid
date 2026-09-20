import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bg-drv1xu.css';
import '../../css/u/um-e79spk.css';
import '../../css/p/pxv3brbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bg-drv1xu"/><path clip-rule="evenodd" class="um-e79spk"/><path class="pxv3brbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:slider-h2"} {...others} />);
}

export default Component;
