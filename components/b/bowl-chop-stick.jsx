import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pe2ei-ydm.css';
import '../../css/f/farn-i4io.css';
import '../../css/l/lbhjmokmv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="pe2ei-ydm"/><path class="farn-i4io"/><path clip-rule="evenodd" class="lbhjmokmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bowl-chop-stick"} {...others} />);
}

export default Component;
