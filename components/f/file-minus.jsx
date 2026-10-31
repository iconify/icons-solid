import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s47qce3_q.css';
import '../../css/w/wnwd-p7qt.css';
import '../../css/x/xoy6ly0je.css';
import '../../css/x/xi9kz6rjn.css';
import '../../css/m/ma7milbsu.css';
import '../../css/d/dv30f9bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s47qce3_q wm-k"/><path class="wm-deco wnwd-p7qt"/><path class="wm-k xoy6ly0je"/><path class="wm-k xi9kz6rjn"/><path class="ma7milbsu wm-shadow"/><path class="dv30f9bkl wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-minus"} {...others} />);
}

export default Component;
