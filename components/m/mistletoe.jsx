import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/prthrmbng.css';
import '../../css/y/ym55n8biq.css';
import '../../css/v/v826tbcka.css';
import '../../css/v/v7oxsddra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="prthrmbng"/><path class="wm-a ym55n8biq"/><path class="v826tbcka wm-s"/><path class="v7oxsddra wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mistletoe"} {...others} />);
}

export default Component;
