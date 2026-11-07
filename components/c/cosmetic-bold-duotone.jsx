import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vk-nl1ymc.css';
import '../../css/l/lj69l5bdu.css';
import '../../css/c/cxt5hpr-p.css';
import '../../css/a/a7c6hybkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="vk-nl1ymc"/><path class="lj69l5bdu"/></g><path class="cxt5hpr-p"/><path class="a7c6hybkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cosmetic-bold-duotone"} {...others} />);
}

export default Component;
