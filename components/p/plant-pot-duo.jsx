import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osbyf9bkz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dodmlfbpn.css';
import '../../css/v/v4bjme-6z.css';
import '../../css/j/j9m2trb9o.css';
import '../../css/g/ggzw_acmu.css';
import '../../css/o/ov9qbvzvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osbyf9bkz secondary"/><g class="dt0cm9dhy primary"><path class="dodmlfbpn"/><path class="v4bjme-6z"/><path class="j9m2trb9o"/><path class="ggzw_acmu"/><path class="ov9qbvzvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:plant-pot-duo"} {...others} />);
}

export default Component;
