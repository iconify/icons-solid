import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfipd280o.css';
import '../../css/y/y44zwradt.css';
import '../../css/t/t1b72z_sa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jfipd280o"/><path class="y44zwradt"/><path class="t1b72z_sa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:taking-pictures-circle"} {...others} />);
}

export default Component;
