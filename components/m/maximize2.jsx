import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wugv_1bga.css';
import '../../css/i/id__8qb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wugv_1bga"/><path class="id__8qb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:maximize2"} {...others} />);
}

export default Component;
