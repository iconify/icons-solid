import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/metobub6v.css';
import '../../css/c/cn0p1ub3z.css';
import '../../css/a/a0mj96bbq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="metobub6v"/><path class="cn0p1ub3z"/><path class="a0mj96bbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chicken"} {...others} />);
}

export default Component;
