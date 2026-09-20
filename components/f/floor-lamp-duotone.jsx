import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akdpxhclq.css';
import '../../css/m/mt1idwbow.css';
import '../../css/n/n5v07et-r.css';
import '../../css/g/gcmr8hbzm.css';
import '../../css/s/smu0idhla.css';
import '../../css/x/xzn968khi.css';
import '../../css/b/b94-ymbfh.css';
import '../../css/d/d6p-imbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="akdpxhclq"/><path class="mt1idwbow"/><path class="n5v07et-r"/><path class="gcmr8hbzm"/><path class="smu0idhla"/><path class="xzn968khi"/><path clip-rule="evenodd" class="b94-ymbfh"/><path class="d6p-imbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:floor-lamp-duotone"} {...others} />);
}

export default Component;
