import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu8bw5b-m.css';
import '../../css/f/f0qb2ibdt.css';
import '../../css/o/om0p6ubzq.css';
import '../../css/h/h6ki9qa1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bu8bw5b-m"/><path class="f0qb2ibdt"/><path class="om0p6ubzq"/><path class="h6ki9qa1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:money-coin-cash"} {...others} />);
}

export default Component;
