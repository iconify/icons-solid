import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpsiiab0r.css';
import '../../css/b/brt3oix6x.css';
import '../../css/p/p1dx4ebbe.css';
import '../../css/n/nh25m9bfu.css';
import '../../css/z/zu1a0cbvh.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dpsiiab0r"><path class="brt3oix6x"/><path class="p1dx4ebbe"/></g><path class="nh25m9bfu"/><circle class="zu1a0cbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:on-exclamation-arrow"} {...others} />);
}

export default Component;
