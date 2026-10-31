import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e43r7kbsl.css';
import '../../css/a/aif1ydb6t.css';
import '../../css/d/d7ih96bcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e43r7kbsl wm-k"/><path class="aif1ydb6t wm-shine"/><path class="d7ih96bcr wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-fox"} {...others} />);
}

export default Component;
