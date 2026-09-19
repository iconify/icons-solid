import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hrsklvb_e.css';
import '../../css/a/acgeldc-e.css';
import '../../css/z/zt58-ib7t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="hrsklvb_e"/><path class="acgeldc-e"/><path class="zt58-ib7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:monitor-cross"} {...others} />);
}

export default Component;
