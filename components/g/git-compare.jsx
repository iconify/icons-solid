import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qrtawli7r.css';
import '../../css/m/m928gw30o.css';
import '../../css/h/h18lq-uwn.css';
import '../../css/r/r960vvbkq.css';
import '../../css/r/ru2xuom4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qrtawli7r wm-shadow"/><path class="m928gw30o wm-shadow"/><path class="h18lq-uwn"/><path class="r960vvbkq"/><path class="ru2xuom4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:git-compare"} {...others} />);
}

export default Component;
