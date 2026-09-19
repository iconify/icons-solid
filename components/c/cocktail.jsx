import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/x/xwwi3buwt.css';
import '../../css/n/niyg3v0_n.css';
import '../../css/d/dgp5v0brw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="xwwi3buwt"/><path class="niyg3v0_n"/><path class="dgp5v0brw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cocktail"} {...others} />);
}

export default Component;
