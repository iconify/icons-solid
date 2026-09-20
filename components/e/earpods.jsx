import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fmnw4sdpg.css';
import '../../css/r/rvmxzpo3b.css';
import '../../css/q/q2f_ko61w.css';
import '../../css/x/xtlcdyv1h.css';
import '../../css/y/yl0zalb8j.css';
import '../../css/y/ym37nykvc.css';
import '../../css/w/wu3idy6kl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fmnw4sdpg"/><path class="rvmxzpo3b"/><path class="q2f_ko61w"/><path class="xtlcdyv1h"/><path class="yl0zalb8j"/><path class="ym37nykvc"/><path class="wu3idy6kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:earpods"} {...others} />);
}

export default Component;
