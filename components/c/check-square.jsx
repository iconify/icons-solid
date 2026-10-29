import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph8xe2vtu.css';
import '../../css/t/tik87sbqv.css';
import '../../css/s/sztca8tbw.css';
import '../../css/g/g480-tbdb.css';
import '../../css/w/wsduo_1ok.css';
import '../../css/r/rols-_b7g.css';
import '../../css/a/ajtm4xuqx.css';
import '../../css/q/qo6b-rtki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ph8xe2vtu wm-shadow"/><path class="tik87sbqv wm-k"/><path class="sztca8tbw wm-k"/><path class="g480-tbdb wm-k"/><path class="wm-k wsduo_1ok"/><path class="rols-_b7g wm-k"/><path class="ajtm4xuqx wm-shine"/><path class="qo6b-rtki wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:check-square"} {...others} />);
}

export default Component;
