import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/intm1b9nk.css';
import '../../css/l/lz8qrlhef.css';
import '../../css/l/lmr7xtcct.css';
import '../../css/l/l_ckfecek.css';
import '../../css/f/fz5z0tbcs.css';
import '../../css/w/wwsm45bfl.css';
import '../../css/y/yckt46b3c.css';
import '../../css/g/gyl-fhbno.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="intm1b9nk"/><path class="lz8qrlhef"/><path class="lmr7xtcct"/><path class="l_ckfecek"/><path class="fz5z0tbcs"/><path class="wwsm45bfl"/><path class="yckt46b3c"/><path class="gyl-fhbno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tropicalfish"} {...others} />);
}

export default Component;
