import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k7wvaw3sb.css';
import '../../css/v/v1yyyts6g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="k7wvaw3sb"/><path class="v1yyyts6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:recording-tape-1"} {...others} />);
}

export default Component;
