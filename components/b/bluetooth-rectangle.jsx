import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/r4gykdblm.css';
import '../../css/x/xr-opxs3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="r4gykdblm"/><path class="xr-opxs3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bluetooth-rectangle"} {...others} />);
}

export default Component;
