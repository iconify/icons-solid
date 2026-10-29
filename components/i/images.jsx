import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b8gdax63a.css';
import '../../css/u/u11d_bcbf.css';
import '../../css/j/j3ihixg7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b8gdax63a"/><path class="u11d_bcbf"/><path class="j3ihixg7r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:images"} {...others} />);
}

export default Component;
