import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnd5ksvsr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dca2urprn.css';
import '../../css/x/x0cxdwb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnd5ksvsr secondary"/><g class="dt0cm9dhy primary"><path class="dca2urprn"/><path class="x0cxdwb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:house-crack-duo"} {...others} />);
}

export default Component;
