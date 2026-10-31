import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/gfnig-b7h.css';
import '../../css/a/a74ox2l4b.css';
import '../../css/l/l-if2ibsb.css';
import '../../css/x/xgzsipblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="gfnig-b7h"/><path class="a74ox2l4b wm-k"/><path class="l-if2ibsb wm-a"/><path class="wm-deco xgzsipblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:regex"} {...others} />);
}

export default Component;
