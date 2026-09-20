import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sar97seze.css';
import '../../css/e/eoo863bjz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="to-5kdesz"><path class="sar97seze"/><path class="eoo863bjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:thread-post-tweet"} {...others} />);
}

export default Component;
