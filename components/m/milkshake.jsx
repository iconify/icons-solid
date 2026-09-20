import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edre0ebcq.css';
import '../../css/n/n3vcm3bks.css';
import '../../css/v/v2ly-gb0l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="edre0ebcq"/><path class="n3vcm3bks"/><path class="v2ly-gb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:milkshake"} {...others} />);
}

export default Component;
