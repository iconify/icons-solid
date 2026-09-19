import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a7lsimbdp.css';
import '../../css/q/qr-7zuduy.css';
import '../../css/q/qv6zecc2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="a7lsimbdp"/><path class="qr-7zuduy"/><path class="qv6zecc2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:machine-robot"} {...others} />);
}

export default Component;
