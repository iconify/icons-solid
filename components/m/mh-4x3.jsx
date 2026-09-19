import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o9krzac4w.css';
import '../../css/x/xm9yobcih.css';
import '../../css/h/h94y0xojb.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="o9krzac4w"/><path class="xm9yobcih"/><path class="h94y0xojb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mh-4x3"} {...others} />);
}

export default Component;
