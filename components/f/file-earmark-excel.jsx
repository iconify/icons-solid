import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7amr-96c.css';
import '../../css/q/qsbdy4bsq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="u7amr-96c"/><path class="qsbdy4bsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-earmark-excel"} {...others} />);
}

export default Component;
