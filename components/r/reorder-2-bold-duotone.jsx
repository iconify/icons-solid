import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uws124flx.css';
import '../../css/q/qg7npcbwy.css';
import '../../css/a/a24g1m3ja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="uws124flx"/><path class="qg7npcbwy"/></g><path class="a24g1m3ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-2-bold-duotone"} {...others} />);
}

export default Component;
