import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uyd20qc5d.css';
import '../../css/x/x6syeybxm.css';
import '../../css/r/r1na0qb3v.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uyd20qc5d"/><path class="x6syeybxm"/><path class="r1na0qb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:health-worker2x-outline"} {...others} />);
}

export default Component;
