import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wdau7zb3q.css';
import '../../css/o/oe67qbcyn.css';
import '../../css/l/lo5oiql7f.css';
import '../../css/e/ejv5t15qo.css';
import '../../css/d/diiq2m6zf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wdau7zb3q wm-shadow"/><path class="oe67qbcyn"/><path class="lo5oiql7f"/><path class="ejv5t15qo"/><path class="diiq2m6zf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:gavel"} {...others} />);
}

export default Component;
