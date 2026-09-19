import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmx2n3bsv.css';
import '../../css/k/k0e30mbrr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lmx2n3bsv"/><path class="k0e30mbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:exit-to-app"} {...others} />);
}

export default Component;
