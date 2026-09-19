import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntnod7-io.css';
import '../../css/s/sqywcu64q.css';
import '../../css/k/kksvv-bpb.css';
import '../../css/i/i_3zdpqwa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><ellipse class="ntnod7-io"/><circle class="sqywcu64q"/><path class="kksvv-bpb"/><path class="i_3zdpqwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:golf-course"} {...others} />);
}

export default Component;
