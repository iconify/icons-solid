import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/q92t2nk7r.css';
import '../../css/i/iolhn0crn.css';
import '../../css/j/jtcxpwb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="q92t2nk7r"/><path class="iolhn0crn"/><path class="jtcxpwb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:airpods"} {...others} />);
}

export default Component;
