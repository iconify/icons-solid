import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/v/vaqln9rvn.css';
import '../../css/k/ko65f3b9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="vaqln9rvn"/><path class="ko65f3b9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:alert-octagon-1"} {...others} />);
}

export default Component;
