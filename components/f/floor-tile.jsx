import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/o/opdzqabnx.css';
import '../../css/l/lpmjdrl6q.css';
import '../../css/v/va6rngboh.css';
import '../../css/e/en2emgbag.css';
import '../../css/d/ddkf6wgvb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="r8cyu3bwz"/><path class="opdzqabnx"/><path class="lpmjdrl6q"/><path class="va6rngboh"/><path class="en2emgbag"/><path class="ddkf6wgvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:floor-tile"} {...others} />);
}

export default Component;
