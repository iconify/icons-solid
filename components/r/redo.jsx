import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-l9_hbgq.css';
import '../../css/s/s13lngkjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u-l9_hbgq"/><path class="s13lngkjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:redo"} {...others} />);
}

export default Component;
