import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jcwot8b0q.css';
import '../../css/l/lnnq29boc.css';
import '../../css/f/fnoitsnzo.css';
import '../../css/j/j7dyzlxlx.css';
import '../../css/a/a53pjbb-j.css';
import '../../css/v/v09ng3b3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="jcwot8b0q"/><path class="lnnq29boc"/><path class="fnoitsnzo"/><path class="j7dyzlxlx"/><path class="a53pjbb-j"/></g><path clip-rule="evenodd" class="v09ng3b3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-bold-duotone"} {...others} />);
}

export default Component;
