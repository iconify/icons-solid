import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/r1iwxwpgc.css';
import '../../css/f/fh_8iqr2b.css';
import '../../css/q/qpdv9achi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="r1iwxwpgc"/><path class="fh_8iqr2b"/><path class="qpdv9achi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-timer"} {...others} />);
}

export default Component;
