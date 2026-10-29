import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wtr_gdbia.css';
import '../../css/j/j3ihixg7r.css';
import '../../css/b/b8gdax63a.css';
import '../../css/u/u11d_bcbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wtr_gdbia"/><path class="j3ihixg7r wm-a"/><path class="b8gdax63a"/><path class="u11d_bcbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:images-duo"} {...others} />);
}

export default Component;
