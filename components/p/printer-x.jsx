import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lw8gf4_kv.css';
import '../../css/o/o32ea-bha.css';
import '../../css/w/wwo-mibap.css';
import '../../css/a/ahklu1bar.css';
import '../../css/e/eozawache.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lw8gf4_kv"/><path class="o32ea-bha"/><path class="wwo-mibap"/><path class="ahklu1bar"/><path class="eozawache"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:printer-x"} {...others} />);
}

export default Component;
