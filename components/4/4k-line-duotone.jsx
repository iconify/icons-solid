import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/va-3p8pyw.css';
import '../../css/h/hajvu_ngz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="va-3p8pyw"/><path class="hajvu_ngz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:4k-line-duotone"} {...others} />);
}

export default Component;
