import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7gxrm85g.css';
import '../../css/u/uvwmqqfnf.css';
import '../../css/g/gcwzppgxn.css';
import '../../css/v/vym_iacup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l7gxrm85g"/><path class="uvwmqqfnf"/><path class="gcwzppgxn"/><path class="vym_iacup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:globe-2"} {...others} />);
}

export default Component;
