import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g39b-qb-o.css';
import '../../css/s/slzw9ibjc.css';
import '../../css/g/g5lysnbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g39b-qb-o"/><path class="slzw9ibjc"/><path class="g5lysnbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:headphones-1"} {...others} />);
}

export default Component;
