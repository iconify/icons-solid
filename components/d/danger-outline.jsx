import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzgygcepj.css';
import '../../css/a/ay1qmvbxn.css';
import '../../css/d/dx2-p-qna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vzgygcepj"/><path class="ay1qmvbxn"/><path clip-rule="evenodd" class="dx2-p-qna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-outline"} {...others} />);
}

export default Component;
