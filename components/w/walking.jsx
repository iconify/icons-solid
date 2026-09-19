import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4fkzxbug.css';
import '../../css/x/xge6mkzpc.css';
import '../../css/v/vb0k3bbvx.css';
import '../../css/q/qiyipmlbn.css';
import '../../css/a/a2kqpsbnd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i4fkzxbug"/><path class="xge6mkzpc"/><path clip-rule="evenodd" class="vb0k3bbvx"/><path class="qiyipmlbn"/><path class="a2kqpsbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:walking"} {...others} />);
}

export default Component;
