import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/h8vew9bpg.css';
import '../../css/u/ua432rslq.css';
import '../../css/a/asbi47bon.css';
import '../../css/f/foqww6r9t.css';
import '../../css/i/i_1yambes.css';
import '../../css/y/y197a8bna.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="h8vew9bpg"/><path class="ua432rslq"/><path class="asbi47bon"/><path class="foqww6r9t"/><path class="i_1yambes"/><path class="y197a8bna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:peoples-two"} {...others} />);
}

export default Component;
