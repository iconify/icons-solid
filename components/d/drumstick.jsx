import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/brgqpejke.css';
import '../../css/x/xqipvl_uh.css';
import '../../css/r/r5owqlbis.css';
import '../../css/o/oyh16waqt.css';
import '../../css/k/kjl88pbfm.css';
import '../../css/g/gd91jvbcf.css';
import '../../css/o/ozmq5mb3n.css';
import '../../css/j/j_0gydvws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="brgqpejke"/><path class="xqipvl_uh"/><path class="r5owqlbis wm-shine"/><path class="oyh16waqt wm-k"/><path class="kjl88pbfm wm-a"/><path class="gd91jvbcf"/><path class="ozmq5mb3n"/><path class="j_0gydvws wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:drumstick"} {...others} />);
}

export default Component;
