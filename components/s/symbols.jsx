import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kwpo8hb7x.css';
import '../../css/z/z44dxt--y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="kwpo8hb7x"/><path class="z44dxt--y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:symbols"} {...others} />);
}

export default Component;
