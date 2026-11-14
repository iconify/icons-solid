import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw3ve7bqp.css';
import '../../css/k/k54g8sq5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gw3ve7bqp"/><path class="k54g8sq5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:thumbs-down-rectangle"} {...others} />);
}

export default Component;
