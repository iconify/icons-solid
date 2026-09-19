import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vhiglp9pn.css';
import '../../css/r/ru3m3v8ji.css';
import '../../css/w/wp8kz4bue.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vhiglp9pn"/><path class="ru3m3v8ji"/><path class="wp8kz4bue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:descend"} {...others} />);
}

export default Component;
