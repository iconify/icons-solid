import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uny6rsjdx.css';
import '../../css/x/x3__3mamu.css';
import '../../css/p/p_0ntubxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uny6rsjdx"/><path class="x3__3mamu"/><path class="p_0ntubxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:creative-commons"} {...others} />);
}

export default Component;
