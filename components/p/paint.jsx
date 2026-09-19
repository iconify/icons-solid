import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/df14or4ow.css';
import '../../css/y/ynv9gxbsk.css';
import '../../css/p/p3k5-achu.css';
import '../../css/p/p8yjlkb-s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="df14or4ow"/><path class="ynv9gxbsk"/><path class="p3k5-achu"/><path class="p8yjlkb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:paint"} {...others} />);
}

export default Component;
