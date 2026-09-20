import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktukd4b1y.css';
import '../../css/i/i38p8qbtp.css';
import '../../css/b/bbkn180sk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ktukd4b1y"/><path class="i38p8qbtp"/><path class="bbkn180sk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:binocular-1"} {...others} />);
}

export default Component;
