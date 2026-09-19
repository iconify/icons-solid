import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/opb5c-oie.css';
import '../../css/h/hqtmz8h1c.css';
import '../../css/b/b7afk-g9p.css';
import '../../css/m/mz2pgdb7c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="opb5c-oie"/><path class="hqtmz8h1c"/><path class="b7afk-g9p"/><path class="mz2pgdb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chopsticks-fork"} {...others} />);
}

export default Component;
