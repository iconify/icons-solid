import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsbdy4bsq.css';
import '../../css/y/yatjdbcod.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="qsbdy4bsq"/><path class="yatjdbcod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-earmark-pdf"} {...others} />);
}

export default Component;
