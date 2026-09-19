import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/x/xo048r81s.css';
import '../../css/v/vn_89gbyq.css';
import '../../css/h/houvjgjhy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="xo048r81s"/><path class="vn_89gbyq"/><path class="houvjgjhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:emotion-unhappy"} {...others} />);
}

export default Component;
