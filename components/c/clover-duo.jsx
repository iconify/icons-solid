import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xe3jmcb9i.css';
import '../../css/i/ii4t2pmgx.css';
import '../../css/z/zki05l2_a.css';
import '../../css/r/r6zdo0mwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xe3jmcb9i"/><path class="ii4t2pmgx"/><path class="wm-a zki05l2_a"/><path class="r6zdo0mwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clover-duo"} {...others} />);
}

export default Component;
