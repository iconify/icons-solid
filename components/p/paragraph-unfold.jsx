import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vouxnjwyh.css';
import '../../css/d/dk7tbpjqp.css';
import '../../css/w/w2yt0objd.css';
import '../../css/z/zz16fz4fj.css';
import '../../css/r/rv7nphbgg.css';
import '../../css/b/b8pb9wbpx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vouxnjwyh"/><path class="dk7tbpjqp"/><path class="w2yt0objd"/><path class="zz16fz4fj"/><path class="rv7nphbgg"/><path class="b8pb9wbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:paragraph-unfold"} {...others} />);
}

export default Component;
