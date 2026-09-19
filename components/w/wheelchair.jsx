import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7ccg5b4f.css';
import '../../css/a/aoi0h3bld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e7ccg5b4f"/><path class="aoi0h3bld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wheelchair"} {...others} />);
}

export default Component;
