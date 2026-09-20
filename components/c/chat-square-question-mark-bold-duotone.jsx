import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/r/r3zcb7bmk.css';
import '../../css/r/revd7f9ko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path class="r3zcb7bmk"/><path class="revd7f9ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-question-mark-bold-duotone"} {...others} />);
}

export default Component;
