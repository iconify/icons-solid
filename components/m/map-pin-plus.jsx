import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s72l8dw0c.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/i/ii4tpe1es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s72l8dw0c"/><circle class="zv6cqnbnp"/><path class="ii4tpe1es"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-plus"} {...others} />);
}

export default Component;
