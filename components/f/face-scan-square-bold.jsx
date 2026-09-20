import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fcda0mbon.css';
import '../../css/o/ovc1wubpy.css';
import '../../css/e/e56ggwbwp.css';
import '../../css/c/c1x9kctkl.css';
import '../../css/v/voo-wv6tx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fcda0mbon"/><path class="ovc1wubpy"/><path class="e56ggwbwp"/><path class="c1x9kctkl"/><path class="voo-wv6tx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:face-scan-square-bold"} {...others} />);
}

export default Component;
