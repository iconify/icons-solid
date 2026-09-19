import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/o/oaj3dytkx.css';
import '../../css/p/p4n8c8b1o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="oaj3dytkx"/><path class="p4n8c8b1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:big-x"} {...others} />);
}

export default Component;
