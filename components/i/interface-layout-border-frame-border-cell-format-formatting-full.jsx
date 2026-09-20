import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7700gb4v.css';
import '../../css/y/yph-txb3i.css';
import '../../css/h/huttp5b3q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="w7700gb4v"/><rect class="yph-txb3i"/><path class="huttp5b3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-layout-border-frame-border-cell-format-formatting-full"} {...others} />);
}

export default Component;
