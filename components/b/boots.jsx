import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jli7p4p0f.css';
import '../../css/y/ypi188d1l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jli7p4p0f"/><path class="ypi188d1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:boots"} {...others} />);
}

export default Component;
