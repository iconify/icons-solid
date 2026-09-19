import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zk8im-d8t.css';
import '../../css/t/tfftvkwws.css';
import '../../css/v/vbacm0bcs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zk8im-d8t"/><path class="tfftvkwws"/><path class="vbacm0bcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-flood-bold"} {...others} />);
}

export default Component;
