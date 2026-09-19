import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/k59-9kjov.css';
import '../../css/d/do4jwbb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="k59-9kjov"/><path class="do4jwbb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:woman"} {...others} />);
}

export default Component;
