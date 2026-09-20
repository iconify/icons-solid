import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ooat3rb3h.css';
import '../../css/e/e6tssrb4q.css';
import '../../css/d/dd--r8bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ooat3rb3h"/><path class="e6tssrb4q"/><path class="dd--r8bsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-square-update-bold"} {...others} />);
}

export default Component;
