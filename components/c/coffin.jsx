import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6z8kjblb.css';
import '../../css/c/ckyy22n2c.css';
import '../../css/o/okh55237r.css';
import '../../css/k/klj5jf2gx.css';
import '../../css/u/uwan0nbpj.css';
import '../../css/h/ht1ir_q7y.css';
import '../../css/n/ntrk-_b7e.css';
import '../../css/j/jv30pdbhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6z8kjblb wm-shadow"/><path class="ckyy22n2c wm-k"/><path class="okh55237r wm-k"/><path class="klj5jf2gx wm-k"/><path class="uwan0nbpj wm-k"/><path class="ht1ir_q7y wm-shine"/><path class="ntrk-_b7e wm-k"/><path class="jv30pdbhc wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:coffin"} {...others} />);
}

export default Component;
