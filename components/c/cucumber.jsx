import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1u9cxbgl.css';
import '../../css/x/xh2lgbbiy.css';
import '../../css/z/zsv03u5kq.css';
import '../../css/n/n7d_avo5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z1u9cxbgl"/><path class="xh2lgbbiy"/><path class="zsv03u5kq"/><path class="n7d_avo5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cucumber"} {...others} />);
}

export default Component;
