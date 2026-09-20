import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykbbngpem.css';
import '../../css/j/jatu--i1f.css';
import '../../css/x/xwy5dwbhf.css';
import '../../css/f/f2quio_lc.css';
import '../../css/b/bklviubeb.css';
import '../../css/q/qox-7nb3a.css';
import '../../css/g/gdwx30bob.css';
import '../../css/k/kq8yargik.css';
import '../../css/r/rxf6v5bnh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ykbbngpem"/><path class="jatu--i1f"/><path class="xwy5dwbhf"/><path class="f2quio_lc"/><path class="bklviubeb"/><path class="qox-7nb3a"/><path class="gdwx30bob"/><path class="kq8yargik"/><path class="rxf6v5bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:drum-duo"} {...others} />);
}

export default Component;
