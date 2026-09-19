import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xs9wfjbeo.css';
import '../../css/f/falyi8bpz.css';
import '../../css/x/xlv_o7opf.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="xs9wfjbeo"/><path class="falyi8bpz"/><path class="xlv_o7opf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ga-1x1"} {...others} />);
}

export default Component;
