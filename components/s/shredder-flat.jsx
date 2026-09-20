import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d689v_84c.css';
import '../../css/x/xnrf-gbpk.css';
import '../../css/d/dm7ua-bpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d689v_84c"/><path clip-rule="evenodd" class="xnrf-gbpk"/><path clip-rule="evenodd" class="dm7ua-bpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shredder-flat"} {...others} />);
}

export default Component;
