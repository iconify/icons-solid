import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/ycvs04bbk.css';
import '../../css/u/u-ofegb1i.css';
import '../../css/e/e4670nb9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ycvs04bbk"/><path class="u-ofegb1i"/><path class="e4670nb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:arrow-left-right"} {...others} />);
}

export default Component;
