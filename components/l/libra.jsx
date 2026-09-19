import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/r/rx2_hy4ee.css';
import '../../css/c/clafphbkx.css';
import '../../css/v/vtw32zujt.css';
import '../../css/v/v9sgduoqw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="rx2_hy4ee"/><path class="clafphbkx"/><path class="vtw32zujt"/><path class="v9sgduoqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:libra"} {...others} />);
}

export default Component;
