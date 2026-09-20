import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qira8wb1r.css';
import '../../css/f/f9ccaqo6x.css';
import '../../css/u/ucaqn74-o.css';
import '../../css/l/lpjtd1rju.css';
import '../../css/k/kp-3q2bmv.css';
import '../../css/k/kkxr6ozsk.css';
import '../../css/x/xirraxbre.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qira8wb1r"/><path class="f9ccaqo6x"/><path class="ucaqn74-o"/><path class="lpjtd1rju"/><path class="kp-3q2bmv"/><path class="kkxr6ozsk"/><path class="xirraxbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:open-file-folder"} {...others} />);
}

export default Component;
