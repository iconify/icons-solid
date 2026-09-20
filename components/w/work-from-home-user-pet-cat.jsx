import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/swr15-bau.css';
import '../../css/a/aqg76zdxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="swr15-bau"/><path class="aqg76zdxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:work-from-home-user-pet-cat"} {...others} />);
}

export default Component;
