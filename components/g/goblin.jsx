import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nldyto_pc.css';
import '../../css/a/axeioj2ci.css';
import '../../css/v/v7qis9w5c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="nldyto_pc"/><path class="axeioj2ci"/><path class="v7qis9w5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:goblin"} {...others} />);
}

export default Component;
