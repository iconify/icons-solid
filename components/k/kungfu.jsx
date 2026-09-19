import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btx30rb9t.css';
import '../../css/a/adk1a1f8p.css';
import '../../css/y/yx977ubbo.css';
import '../../css/m/my4dskblt.css';
import '../../css/r/r_ykrfbmv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="btx30rb9t"><path class="adk1a1f8p"/><path class="yx977ubbo"/><path class="my4dskblt"/><path class="r_ykrfbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:kungfu"} {...others} />);
}

export default Component;
