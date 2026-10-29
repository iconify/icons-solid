import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x2_uxy2bi.css';
import '../../css/c/c7ls62bud.css';
import '../../css/y/yyo-cxb_u.css';
import '../../css/z/zqz-gxb1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="x2_uxy2bi"/><path class="c7ls62bud"/><path class="yyo-cxb_u"/><path class="zqz-gxb1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:citrus"} {...others} />);
}

export default Component;
