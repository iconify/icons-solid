import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wc-7gebsn.css';
import '../../css/m/mnfeitrok.css';
import '../../css/x/x9m6rhb2c.css';
import '../../css/v/vve7qertz.css';
import '../../css/k/kr4rgs68j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wc-7gebsn wm-deco"/><path class="mnfeitrok wm-deco"/><path class="wm-k x9m6rhb2c"/><path class="vve7qertz wm-a"/><path class="kr4rgs68j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:case-lower-blueprint"} {...others} />);
}

export default Component;
