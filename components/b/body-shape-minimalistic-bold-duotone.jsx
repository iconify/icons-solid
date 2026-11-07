import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k39o4pb0d.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/a0o04vbkk.css';
import '../../css/z/zskz7hbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k39o4pb0d"/><g class="xtpeb-edw"><path class="a0o04vbkk"/><path class="zskz7hbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:body-shape-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
