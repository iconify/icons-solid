import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuedvwbvv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/ro0x_q1fo.css';
import '../../css/x/x9pvfacul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iuedvwbvv secondary"/><g class="dt0cm9dhy primary"><path class="ro0x_q1fo"/><path class="x9pvfacul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:earbuds-duo"} {...others} />);
}

export default Component;
