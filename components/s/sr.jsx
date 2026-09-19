import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqd3ar4ot.css';
import '../../css/j/j9-twf9kk.css';
import '../../css/a/agl3okrsa.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qqd3ar4ot"/><path class="j9-twf9kk"/><path clip-rule="evenodd" class="agl3okrsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:sr"} {...others} />);
}

export default Component;
