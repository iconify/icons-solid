import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/j/j-xkdmptu.css';
import '../../css/e/e80ekabng.css';
import '../../css/q/qx4sqdbdm.css';
import '../../css/w/woumflsdp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="j-xkdmptu"/><path class="e80ekabng"/><path class="qx4sqdbdm"/><path clip-rule="evenodd" class="woumflsdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:popcorn-pop"} {...others} />);
}

export default Component;
