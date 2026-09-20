import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ah1hcpbhw.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/q/qrid-hb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ah1hcpbhw"/><circle class="zv6cqnbnp"/><path class="qrid-hb2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-x"} {...others} />);
}

export default Component;
