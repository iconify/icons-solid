import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgne39bkn.css';
import '../../css/m/mhf9vv20r.css';
import '../../css/v/v3qvc020l.css';
import '../../css/q/qe32f93df.css';
import '../../css/h/hta7xqm4w.css';
import '../../css/l/l9dbtrbok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgne39bkn"/><path class="mhf9vv20r"/><path class="v3qvc020l"/><g clip-rule="evenodd" class="qe32f93df"><path class="hta7xqm4w"/><path class="l9dbtrbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
