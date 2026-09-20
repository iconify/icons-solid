import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/gzwvjpz8t.css';
import '../../css/v/v2du_qb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="gzwvjpz8t"/><path class="v2du_qb6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:presention-chart"} {...others} />);
}

export default Component;
