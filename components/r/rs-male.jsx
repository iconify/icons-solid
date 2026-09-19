import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xskwgdcll.css';
import '../../css/i/inp-uq4ue.css';
import '../../css/g/g-w3wudye.css';
import '../../css/j/j_ouvdbfm.css';
import '../../css/r/rew3bfbil.css';
import '../../css/u/ut1dcobpm.css';
import '../../css/c/cuchkppod.css';
import '../../css/m/mbx3f8d8b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="xskwgdcll"/><path class="inp-uq4ue"/><path class="g-w3wudye"/><path class="j_ouvdbfm"/><path class="rew3bfbil"/><path class="ut1dcobpm"/><path class="cuchkppod"/><path class="mbx3f8d8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rs-male"} {...others} />);
}

export default Component;
