import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dzxztkb4u.css';
import '../../css/d/dj9zaictl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dzxztkb4u"/><path class="dj9zaictl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-vertical-broken"} {...others} />);
}

export default Component;
