import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p-nn7p34f.css';
import '../../css/e/eg-dtmkbo.css';
import '../../css/f/fyvi155ol.css';
import '../../css/t/tqnmtibrt.css';
import '../../css/c/cwrfew54d.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p-nn7p34f"/><path class="eg-dtmkbo"/><path class="fyvi155ol"/><path class="tqnmtibrt"/><path class="cwrfew54d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:coins"} {...others} />);
}

export default Component;
