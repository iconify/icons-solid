import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w7k0ltbfx.css';
import '../../css/a/aktchkbgk.css';
import '../../css/t/t6ljfcc4h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w7k0ltbfx"/><path class="aktchkbgk"/><path class="t6ljfcc4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:refresh"} {...others} />);
}

export default Component;
