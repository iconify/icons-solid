import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t2yy3v0xn.css';
import '../../css/w/wkepezrfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t2yy3v0xn"/><path class="wkepezrfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-cloud"} {...others} />);
}

export default Component;
