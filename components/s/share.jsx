import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jwjqera0w.css';
import '../../css/p/p_-ie5f0h.css';
import '../../css/w/wivnu0x9a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jwjqera0w"/><path class="p_-ie5f0h"/><path class="wivnu0x9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:share"} {...others} />);
}

export default Component;
