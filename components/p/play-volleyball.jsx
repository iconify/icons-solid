import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exs-2eb4s.css';
import '../../css/u/u5pw5ft_q.css';
import '../../css/m/mix-cbc3h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="exs-2eb4s"/><path class="u5pw5ft_q"/><path class="mix-cbc3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:play-volleyball"} {...others} />);
}

export default Component;
