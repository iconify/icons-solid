import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qry4-ubuv.css';
import '../../css/r/rjcylly-u.css';
import '../../css/w/wwo-mibap.css';
import '../../css/a/ahklu1bar.css';
import '../../css/e/eozawache.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qry4-ubuv"/><path class="rjcylly-u"/><path class="wwo-mibap"/><path class="ahklu1bar"/><path class="eozawache"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:printer-x"} {...others} />);
}

export default Component;
