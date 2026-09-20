import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4p8mv-vk.css';
import '../../css/c/co42yjbtz.css';
import '../../css/z/z1efstvih.css';
import '../../css/n/n5mt_x3_w.css';
import '../../css/u/u-iw4ubjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r4p8mv-vk"/><path class="co42yjbtz"/><path class="z1efstvih"/><path class="n5mt_x3_w"/><path class="u-iw4ubjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:male"} {...others} />);
}

export default Component;
