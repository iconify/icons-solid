import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy37s_bkq.css';
import '../../css/y/ycw5wh5rm.css';
import '../../css/a/ap8nqn73g.css';
import '../../css/c/cm-0w4bfg.css';
import '../../css/i/i1jreph8w.css';
import '../../css/e/ekv-z22yc.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="hy37s_bkq"><path class="ycw5wh5rm"/><path class="ap8nqn73g"/><path class="cm-0w4bfg"/><path class="i1jreph8w"/><path class="ekv-z22yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:on-off-1-duo"} {...others} />);
}

export default Component;
