import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qpejv9b5c.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/u/ulq2j1bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qpejv9b5c"/><circle class="zv6cqnbnp"/><path class="ulq2j1bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-check"} {...others} />);
}

export default Component;
