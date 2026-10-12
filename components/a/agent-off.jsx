import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9hlsb9oy.css';
import '../../css/b/bediil7wz.css';
import '../../css/m/mnxnmyx7b.css';
import '../../css/x/xq7yvcc_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="a9hlsb9oy"/><path class="bediil7wz"/><rect class="mnxnmyx7b"/><path class="xq7yvcc_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:agent-off"} {...others} />);
}

export default Component;
